import {
  createMasterAchievement,
  getAllMasterAchievements,
  getMasterAchievementById,
  updateMasterAchievement,
  deleteMasterAchievement
} from '../service/distroPOMasterAchievementService.js';

const serializeAchievement = (obj) => {
  if (!obj) return obj;
  if (Array.isArray(obj)) return obj.map(serializeAchievement);
  return {
    ...obj,
    targetAmount: obj.targetAmount !== undefined && obj.targetAmount !== null ? obj.targetAmount.toString() : obj.targetAmount
  };
};

const distroPOMasterAchievementController = {
  async create(req, res) {
    try {
      const result = await createMasterAchievement(req.body);
      res.status(201).json(serializeAchievement(result));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async getAll(req, res) {
    try {
      const result = await getAllMasterAchievements();
      res.json(serializeAchievement(result));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async getById(req, res) {
    try {
      const id = req.params.id;
      const result = await getMasterAchievementById(id);
      if (!result) return res.status(404).json({ error: 'Not found' });
      res.json(serializeAchievement(result));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async update(req, res) {
    try {
      const id = req.params.id;
      const result = await updateMasterAchievement(id, req.body);
      res.json(serializeAchievement(result));
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async delete(req, res) {
    try {
      const id = req.params.id;
      await deleteMasterAchievement(id);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default distroPOMasterAchievementController;
