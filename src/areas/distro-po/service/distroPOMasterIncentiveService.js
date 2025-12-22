import { PrismaClient } from '../../../../prisma/mainDB/@prisma/client-main/index.js';
const prisma = new PrismaClient();
export async function createMasterIncentive(data) {
  return prisma.Distro_PO_Incentive.create({ data });
}

export async function getAllMasterIncentives() {
  return prisma.Distro_PO_Incentive.findMany();
}

export async function getMasterIncentiveById(id) {
  return prisma.Distro_PO_Incentive.findUnique({ where: { id: Number(id) } });
}

export async function updateMasterIncentive(id, data) {
  return prisma.Distro_PO_Incentive.update({ where: { id: Number(id) }, data });
}

export async function deleteMasterIncentive(id) {
  return prisma.Distro_PO_Incentive.delete({ where: { id: Number(id) } });
}
