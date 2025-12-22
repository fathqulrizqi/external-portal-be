// Seeder for Distro_PO_MasterAchievement
// Run with: node prisma/mainDB/seeders/seed-master-achievement.js
import { PrismaClient } from '../@prisma/client-main/index.js';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  // Fetch all companies with code, name, and city
  const companies = await prisma.Company.findMany({
    select: { companyCode: true, companyName: true, companyCity: true }
  });
  // Fetch all vehicles
  const vehicles = await prisma.Distro_PO_MasterItem.findMany({
    select: { vehicle: true, vehicleId: true }
  });
  const periodYear = new Date().getFullYear();
  const achievements = [];
  // For each company, create 1-3 achievements with random vehicles
  for (const company of companies.filter(c => c.companyCode && c.companyName && c.companyCity)) {
    const numAchievements = faker.number.int({ min: 1, max: 3 });
    for (let i = 0; i < numAchievements; i++) {
      const vehicleObj = vehicles[faker.number.int({ min: 0, max: vehicles.length - 1 })];
      achievements.push({
        customerCode: company.companyCode,
        customerName: company.companyName,
        city: company.companyCity,
        targetQty: faker.number.int({ min: 100, max: 10000 }),
        targetAmount: faker.number.bigInt({ min: 1000000n, max: 100000000n }),
        vehicle: vehicleObj?.vehicle || '',
        vehicleId: vehicleObj?.vehicleId || '',
        periodYear,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
  }
  // Bulk insert
  for (const ach of achievements) {
    await prisma.Distro_PO_MasterAchievement.create({ data: ach });
  }
  console.log(`Seeded ${achievements.length} Distro_PO_MasterAchievement rows.`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(e => {
    console.error(e);
    return prisma.$disconnect();
  });
