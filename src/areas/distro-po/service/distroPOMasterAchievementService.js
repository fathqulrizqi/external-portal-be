import { PrismaClient } from '../../../../prisma/mainDB/@prisma/client-main/index.js';
const prisma = new PrismaClient();

// CREATE
async function createMasterAchievement(data) {
  return prisma.Distro_PO_MasterAchievement.create({ data });
}

// READ ALL
async function getAllMasterAchievements() {
  return prisma.Distro_PO_MasterAchievement.findMany();
}

// READ BY ID
async function getMasterAchievementById(id) {
  return prisma.Distro_PO_MasterAchievement.findUnique({ where: { id: Number(id) } });
}

// UPDATE
async function updateMasterAchievement(id, data) {
  return prisma.Distro_PO_MasterAchievement.update({ where: { id: Number(id) }, data });
}

// DELETE
async function deleteMasterAchievement(id) {
  return prisma.Distro_PO_MasterAchievement.delete({ where: { id: Number(id) } });
}

export {
  createMasterAchievement,
  getAllMasterAchievements,
  getMasterAchievementById,
  updateMasterAchievement,
  deleteMasterAchievement
};
