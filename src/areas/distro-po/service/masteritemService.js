// Service for MasterItem CRUD
import { PrismaClient } from '../../../../prisma/mainDB/@prisma/client-main/index.js';
const prisma = new PrismaClient();

export async function getAll() {
  // Example: add pagination, sorting, and filtering
  // Accept options via arguments if needed
  // For now, hardcoded example values
  const page = 1; // page number
  const pageSize = 20; // items per page
  const sortBy = 'id'; // sort field
  const sortOrder = 'asc'; // 'asc' or 'desc'
  const filter = {}; // e.g. { isActive: true }

  return prisma.Distro_PO_MasterItem.findMany({
    where: filter,
    orderBy: { [sortBy]: sortOrder },
    skip: (page - 1) * pageSize,
    take: pageSize,
    select: {
      id: true,
      vehicle: true,
      vehicleId: true,
      category: true,
      productName: true,
      spType: true,
      itemId: true,
      isActive: true,
      price: true,
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