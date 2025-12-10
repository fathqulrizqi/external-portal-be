import { createPO, getAllPOs, getPOById, updatePO, deletePO, getPOSummary } from '../service/distroPOService.js';

const distroPOController = {
  async getPOSummary(req, res) {
    try {
      const { year, month } = req.query;
      const result = await getPOSummary({ year, month });
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async createPO(req, res) {
    try {
      const { header, items } = req.body;
      const result = await createPO(header, items);
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async getAllPOs(req, res) {
    try {
      const result = await getAllPOs();
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async getPOById(req, res) {
    try {
      const id = req.params.id;
      const result = await getPOById(id);
      if (!result) return res.status(404).json({ error: 'Not found' });
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async updatePO(req, res) {
    try {
      const id = req.params.id;
      const { header, items } = req.body;
      const result = await updatePO(id, header, items);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async deletePO(req, res) {
    try {
      const id = req.params.id;
      await deletePO(id);
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
};

export default distroPOController;
