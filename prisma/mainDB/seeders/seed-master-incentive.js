// Seeder for Distro_PO_Incentive (MasterIncentive)
// Run with: node prisma/mainDB/seeders/seed-master-incentive.js
import { PrismaClient } from '../@prisma/client-main/index.js';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const RANGES = [
  { rangeFrom: 85, rangeTo: 94 },
  { rangeFrom: 95, rangeTo: 99 },
  { rangeFrom: 100, rangeTo: 104 },
  { rangeFrom: 105, rangeTo: 999 },
];

async function main() {
  // Fetch all companies with code, name, and city
  // Fetch all vehicles and group by unique (vehicle, vehicleId)
  const vehiclesRaw = await prisma.Distro_PO_MasterItem.findMany({
    select: { vehicle: true, vehicleId: true }
  });
  // Get unique (vehicle, vehicleId) pairs
  const vehicles = Array.from(
    new Map(vehiclesRaw.map(v => [v.vehicle + '|' + v.vehicleId, v])).values()
  );
  const periodYear = new Date().getFullYear();
  const incentives = [];
  for (const vehicleObj of vehicles) {
    for (const range of RANGES) {
      incentives.push({
        rangeFrom: range.rangeFrom,
        rangeTo: range.rangeTo,
        vehicle: vehicleObj.vehicle || '',
        vehicleId: vehicleObj.vehicleId || '',
        periodYear,
        amount: faker.number.int({ min: 50, max: 500 }),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  }
  // Bulk insert
  for (const inc of incentives) {
    await prisma.Distro_PO_Incentive.create({ data: inc });
  }
  console.log(`Seeded ${incentives.length} Distro_PO_Incentive rows.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(e => {
    console.error(e);
    return prisma.$disconnect();
  });
