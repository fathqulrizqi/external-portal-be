// Seeder for Distro_PO_Header and Distro_PO_Line
// Run with: node prisma/mainDB/seed-distro-po.js
import { PrismaClient } from './@prisma/client-main/index.js';
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
  for (let i = 0; i < NUM_HEADERS; i++) {
    const poDate = randomDateThisYear();
    const poNumber = faker.string.numeric(4) + '.PO.' + String(poDate.getMonth() + 1).padStart(2, '0') + '.' + faker.string.numeric(6);
    const niterraPO = `Niterra/PO/${poDate.getFullYear()}${String(poDate.getMonth() + 1).padStart(2, '0')}/${faker.string.numeric(3)}`;
    const header = await prisma.Distro_PO_Header.create({
      data: {
        distributorName: faker.company.name(),
        customerCode: faker.string.alphanumeric(6).toUpperCase(),
        poDate,
        poNumber,
        niterraSO: faker.string.numeric(8),
        niterraPO,
        items: {
          create: Array.from({ length: LINES_PER_HEADER() }).map(() => ({
            vehicleCategory: faker.helpers.arrayElement(CATEGORIES),
            spType: faker.helpers.arrayElement(TYPES),
            partName: faker.commerce.productName(),
            partNumber: faker.string.numeric(8),
            qty: faker.number.int({ min: 1, max: 1000 })
          }))
        }
      }
    });
    if ((i + 1) % 100 === 0) console.log(`Seeded ${i + 1} headers`);
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
