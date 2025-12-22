// Seeder for Access and Role tables in mainDB (ESM)
// Run with: npx prisma db seed --schema=prisma/mainDB/schema/user.prisma

import { PrismaClient } from '../@prisma/client-main/index.js';
const prisma = new PrismaClient();

async function main() {
  // Seed Access table
  const accessData = [
    { accessId: 1, accessName: 'User Member' },
    { accessId: 2, accessName: 'User Leader' },
    { accessId: 3, accessName: 'Full Access' },
  ];
  for (const access of accessData) {
    await prisma.access.upsert({
      where: { accessId: access.accessId },
      update: {},
      create: access,
    });
  }

  // Seed Role table
  const roleData = [
    { roleId: 1, roleName: 'User' },
    { roleId: 2, roleName: 'Admin' },
  ];
  for (const role of roleData) {
    await prisma.role.upsert({
      where: { roleId: role.roleId },
      update: {},
      create: role,
    });
  }

  console.log('Seeded Access and Role tables.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
