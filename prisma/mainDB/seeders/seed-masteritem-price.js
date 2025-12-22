
import { PrismaClient } from '../@prisma/client-main/index.js';

const prisma = new PrismaClient();

async function main() {
  const currentYear = new Date().getFullYear();
  const activationDate = new Date(`${currentYear}-01-01T00:00:00.000Z`);

  // Example: create a price header for 2025 (id is now uuid string)
  const header = await prisma.distro_PO_MasterItem_Price_Header.create({
    data: {
      description: `Default price for all customers, ${currentYear}`,
      createdBy: 'system',
      // createdAt and updatedAt are set automatically
    },
  });

  // Example: create a price line for all customers and all items
  // You may want to loop through all items, here is a single example
  // Fetch all items
  const items = await prisma.distro_PO_MasterItem.findMany({ where: { isActive: true } });

  function getRandomPrice(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const priceLines = items.map(item => ({
    headerId: header.id, // uuid string
    customerCode: 'All',
    customerName: 'All',
    itemId: item.itemId,
    itemName: item.productName,
    price: getRandomPrice(10000, 1000000),
    activationDate,
  }));

  if (priceLines.length > 0) {
    await prisma.distro_PO_MasterItem_Price_Line.createMany({ data: priceLines });
  }

  console.log(`Seeded ${priceLines.length} price lines for header ${header.id}`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
