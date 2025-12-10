import { PrismaClient } from '../../../../prisma/mainDB/@prisma/client-main/index.js';
const prisma = new PrismaClient();

// CREATE PO Header with items
async function createPO(header, items) {
  return prisma.Distro_PO_Header.create({
    data: {
      ...header,
      items: {
        create: items
      }
    },
    include: { items: true }
  });
}

// READ all PO Headers
async function getAllPOs() {
  return prisma.Distro_PO_Header.findMany({ include: { items: true } });
}

// READ single PO Header by id
async function getPOById(id) {
  if (!id || typeof id !== 'number') {
    throw new Error('PO id is required and must be a number');
  }
  return prisma.Distro_PO_Header.findUnique({ where: { id }, include: { items: true } });
}

// UPDATE PO Header and items
async function updatePO(id, header, items) {
  // Update header
  const updatedHeader = await prisma.Distro_PO_Header.update({
    where: { id },
    data: header
  });
  // Update items (delete old, create new for simplicity)
  await prisma.Distro_PO_Line.deleteMany({ where: { purchaseOrderId: id } });
  await prisma.Distro_PO_Line.createMany({
    data: items.map(item => ({ ...item, purchaseOrderId: id }))
  });
  return getPOById(id);
}

// DELETE PO Header and items
async function deletePO(id) {
  await prisma.Distro_PO_Line.deleteMany({ where: { purchaseOrderId: id } });
  return prisma.Distro_PO_Header.delete({ where: { id } });
}

export {
  createPO,
  getAllPOs,
  getPOById,
  updatePO,
  deletePO
};
