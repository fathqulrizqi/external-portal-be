import {
  createMasterIncentive,
  getAllMasterIncentives,
  getMasterIncentiveById,
  updateMasterIncentive,
  deleteMasterIncentive
} from '../service/distroPOMasterIncentiveService.js';

const distroPOMasterIncentiveController = {
  async create(req, res) {
    try {
      const result = await createMasterIncentive(req.body);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async getAll(req, res) {
    try {
      const result = await getAllMasterIncentives();
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async getById(req, res) {
    try {
      const id = req.params.id;
      const result = await getMasterIncentiveById(id);
      if (!result) return res.status(404).json({ error: 'Not found' });
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async update(req, res) {
    try {
      const id = req.params.id;
      const result = await updateMasterIncentive(id, req.body);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async delete(req, res) {
    try {
      const id = req.params.id;
      await deleteMasterIncentive(id);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default distroPOMasterIncentiveController;
