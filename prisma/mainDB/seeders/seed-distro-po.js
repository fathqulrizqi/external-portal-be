// Seeder for Distro_PO_Header and Distro_PO_Line
// Run with: node prisma/mainDB/seed-distro-po.js
import { PrismaClient } from '../@prisma/client-main/index.js';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

const NUM_HEADERS = 1000;
const LINES_PER_HEADER = () => faker.number.int({ min: 1, max: 6 });
const CATEGORIES = ['2W Ni', '2W PM', '4W Ni', '4W PM', 'Plug Cap'];
const TYPES = ['GP', 'STD'];

function randomDateThisYear() {
  const start = new Date(new Date().getFullYear(), 0, 1);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

async function main() {
  // Track sequence per customer per yyyymm
  const seqMap = {};
  // Fetch all master items once
  const masterItems = await prisma.Distro_PO_MasterItem.findMany();
  // Fetch all companies to use as distributors
  const companies = await prisma.Company.findMany({
    select: { companyCode: true, companyName: true }
  });
  // Filter out companies without a code or name
  const distributors = companies
    .filter(c => c.companyCode && c.companyName)
    .map(c => ({
      distributorName: c.companyName,
      customerCode: c.companyCode
    }));
  const year = new Date().getFullYear();
  let totalPOs = 0;
  for (let month = 1; month <= 12; month++) {
    for (const dist of distributors) {
      const yyyy = year;
      const mm = String(month).padStart(2, '0');
      const yyyymm = `${yyyy}${mm}`;
      const seqKey = `${dist.customerCode}_${yyyymm}`;
      if (!seqMap[seqKey]) seqMap[seqKey] = 1;
      else seqMap[seqKey]++;
      const seq = String(seqMap[seqKey]).padStart(3, '0');
      const niterraPO = `PO/${dist.customerCode}/${yyyymm}/${seq}`;
      const poNumber = faker.string.numeric(4) + '.PO.' + mm + '.' + faker.string.numeric(6);
      const poDate = new Date(`${yyyy}-${mm}-01T00:00:00.000Z`);
      // Pick random items from master for this PO
      const numLines = LINES_PER_HEADER();
      const shuffled = masterItems.sort(() => 0.5 - Math.random());
      const selectedItems = shuffled.slice(0, numLines).map(item => ({
        vehicle: item.vehicle || '',
        vehicleId: item.vehicleId || '',
        category: item.category || '',
        spType: item.spType || '',
        partName: item.productName || '',
        partNumber: item.itemId || '',
        qty: faker.number.int({ min: 1, max: 1000 }),
        price: item.price || faker.number.int({ min: 10000, max: 1000000 })
      }));
      await prisma.Distro_PO_Header.create({
        data: {
          distributorName: dist.distributorName,
          customerCode: dist.customerCode,
          poDate,
          poNumber,
          niterraSO: faker.string.numeric(8),
          niterraPO,
          items: {
            create: selectedItems
          }
        }
      });
      totalPOs++;
      if (totalPOs % 100 === 0) console.log(`Seeded ${totalPOs} headers`);
    }
  }
}

main()
  .then(() => {
    console.log('Seeding complete');
    return prisma.$disconnect();
  })
  .catch(e => {
    console.error(e);
    return prisma.$disconnect();
  });
