// Seeder for AllowedIpCors table in mainDB (ESM)
// Run with: npx prisma db seed --schema=prisma/mainDB/schema/main.prisma

import { PrismaClient } from '../@prisma/client-main/index.js';
const prisma = new PrismaClient();

async function main() {
  // Seed AllowedIpCors table
  const ipData = [
    { ip: 'http://localhost:3002' },
  ];
  for (const entry of ipData) {
    await prisma.allowedIpCors.upsert({
      where: { ip: entry.ip },
      update: {},
      create: entry,
    });
  }
  console.log('Seeded AllowedIpCors table.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
