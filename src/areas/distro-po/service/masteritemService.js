// Service for MasterItem CRUD
import { PrismaClient } from '../../../../prisma/mainDB/@prisma/client-main/index.js';
const prisma = new PrismaClient();

export async function getAll() {
  // Return only active items, sorted by id ascending
  return prisma.Distro_PO_MasterItem.findMany({
    where: {
      isActive: true
    },
    orderBy: { id: 'asc' },
    select: {
      id: true,
      vehicle: true,
      vehicleId: true,
      category: true,
      productName: true,
      spType: true,
      itemId: true,
      isActive: true,
      // price: true, // removed, no longer in schema
    }
  });
}

export async function create(data) {
  return prisma.Distro_PO_MasterItem.create({ data });
}

export async function update(id, data) {
  return prisma.Distro_PO_MasterItem.update({ where: { id }, data });
}

export async function remove(id) {
  return prisma.Distro_PO_MasterItem.delete({ where: { id } });
}
