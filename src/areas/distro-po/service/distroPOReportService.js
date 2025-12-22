import { PrismaClient } from '../../../../prisma/mainDB/@prisma/client-main/index.js';
const prisma = new PrismaClient();

async function getReport({ distributors, year, type }) {
  // Ensure distributors is always an array of strings
  let distributorArr = [];
  // Default to empty array if undefined
  if (typeof distributors === 'undefined' || distributors === null) {
    distributorArr = [];
  } else if (Array.isArray(distributors)) {
    distributorArr = distributors.filter(Boolean);
  } else if (typeof distributors === 'string' && distributors) {
    distributorArr = [distributors];
  }
  // If no distributors selected, do not filter by distributor (return all)
  const planWhere = distributorArr.length
    ? { customerName: { in: distributorArr }, periodYear: Number(year) }
    : { periodYear: Number(year) };
  const actualWhere = distributorArr.length
    ? {
        purchaseOrder: {
          distributorName: { in: distributorArr },
          poDate: {
            gte: new Date(`${year}-01-01`),
            lt: new Date(`${Number(year) + 1}-01-01`)
          }
        }
      }
    : {
        purchaseOrder: {
          poDate: {
            gte: new Date(`${year}-01-01`),
            lt: new Date(`${Number(year) + 1}-01-01`)
          }
        }
      };
  // Fetch plan data from MasterAchievement
  const planRows = await prisma.Distro_PO_MasterAchievement.findMany({
    where: planWhere
  });
  // Fetch actual data from PO Lines, filter by related Distro_PO_Header.distributorName
  const actualRows = await prisma.Distro_PO_Line.findMany({
    where: actualWhere,
    include: {
      purchaseOrder: true
    }
  });

  // Select plan value based on type
  const planValueKey = type === 'qty' ? 'targetQty' : 'targetAmount';
  // Helper to convert BigInt to Number if needed
  function toNumber(val) {
    if (typeof val === 'bigint') return Number(val);
    return val || 0;
  }

  // Group and sum by distributor and vehicle
  const distributorVehicleMap = {};
  planRows.forEach(planRow => {
    const distributorName = planRow.customerName;
    const vehicle = planRow.vehicle || 'All';
    const vehicleID = planRow.vehicleId || 'All';
    // For 'qty', use qty field; for 'amount', calculate qty * price
    const actualValueKey = type === 'qty' ? 'qty' : 'amount';
    const key = `${distributorName}__${vehicle}`;
    if (!distributorVehicleMap[key]) {
      distributorVehicleMap[key] = {
        distributor: distributorName,
        vehicle,
        vehicleID,
        plan: Array(12).fill(0),
        planQ: [0,0,0,0],
        planYear: 0,
        actual: Array(12).fill(0),
        actualQ: [0,0,0,0],
        actualYear: 0,
        percentage: Array(12).fill(0),
        percentageQ: [0,0,0,0],
        percentageYear: 0,
        type: ''
      };
    }
    // Monthly breakdown
    let hasMonthlyPlan = false;
    const planMonths = Array(12).fill(0);
    const actualMonths = Array(12).fill(0);
    for (let m = 1; m <= 12; m++) {
      let val = planRow[`targetMonth${m}`];
      if (type === 'amount') val = toNumber(val);
      if (val && val !== 0) hasMonthlyPlan = true;
      planMonths[m-1] = val || 0;
      // Actual: sum actuals for this month
      actualMonths[m-1] = actualRows
        .filter(actRow => actRow.purchaseOrder.distributorName === distributorName &&
          (actRow.vehicle === vehicle || actRow.vehicleId === vehicleID) &&
          new Date(actRow.purchaseOrder.poDate).getMonth() + 1 === m)
        .reduce((sum, actRow) => {
          let v;
          if (type === 'amount') {
            v = toNumber(actRow.qty) * toNumber(actRow.price);
          } else {
            v = toNumber(actRow.qty);
          }
          return sum + (v || 0);
        }, 0);
    }
    // If no monthly plan data, distribute yearly total evenly across months
    let planYear = 0;
    if (hasMonthlyPlan) {
      planYear = planMonths.reduce((a,b) => a+b, 0);
    } else {
      let val = planRow[planValueKey];
      if (type === 'amount') val = toNumber(val);
      planYear = val || 0;
      // Distribute yearly plan evenly across months
      const perMonth = Math.round(planYear / 12);
      for (let i = 0; i < 12; i++) {
        planMonths[i] = perMonth;
      }
    }
    // Quarterly breakdown
    const planQuarters = [0,0,0,0];
    const actualQuarters = [0,0,0,0];
    for (let q = 0; q < 4; q++) {
      planQuarters[q] = planMonths.slice(q*3, q*3+3).reduce((a,b) => a+b, 0);
      actualQuarters[q] = actualMonths.slice(q*3, q*3+3).reduce((a,b) => a+b, 0);
    }
    const actualYear = actualMonths.reduce((a,b) => a+b, 0);
    // Percentages
    const percentageMonths = planMonths.map((p, i) => p ? Math.round((actualMonths[i]/p)*100) : 0);
    const percentageQuarters = planQuarters.map((p, i) => p ? Math.round((actualQuarters[i]/p)*100) : 0);
    const percentageYear = planYear ? Math.round((actualYear/planYear)*100) : 0;
    // Sum into distributorVehicleMap
    for (let i = 0; i < 12; i++) {
      distributorVehicleMap[key].plan[i] += planMonths[i];
      distributorVehicleMap[key].actual[i] += actualMonths[i];
      distributorVehicleMap[key].percentage[i] = distributorVehicleMap[key].plan[i]
        ? Math.round((distributorVehicleMap[key].actual[i]/distributorVehicleMap[key].plan[i])*100)
        : 0;
    }
    for (let i = 0; i < 4; i++) {
      distributorVehicleMap[key].planQ[i] += planQuarters[i];
      distributorVehicleMap[key].actualQ[i] += actualQuarters[i];
      distributorVehicleMap[key].percentageQ[i] = distributorVehicleMap[key].planQ[i]
        ? Math.round((distributorVehicleMap[key].actualQ[i]/distributorVehicleMap[key].planQ[i])*100)
        : 0;
    }
    distributorVehicleMap[key].planYear += planYear;
    distributorVehicleMap[key].actualYear += actualYear;
    distributorVehicleMap[key].percentageYear = distributorVehicleMap[key].planYear
      ? Math.round((distributorVehicleMap[key].actualYear/distributorVehicleMap[key].planYear)*100)
      : 0;
  });

  // Convert map to sorted array
  let report = Object.values(distributorVehicleMap).sort((a, b) => {
    if (a.distributor < b.distributor) return -1;
    if (a.distributor > b.distributor) return 1;
    if (a.vehicle < b.vehicle) return -1;
    if (a.vehicle > b.vehicle) return 1;
    return 0;
  });

  return report;
}

export { getReport };
