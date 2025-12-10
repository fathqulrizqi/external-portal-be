// Controller for MasterItem CRUD
import { getAll, create, update, remove } from '../service/masteritemService.js';
import { validateMasterItem } from '../validation/masteritemValidation.js';

const masteritemController = {
  async getAll(req, res, next) {
    try {
      const items = await getAll();
      res.json(items);
    } catch (err) { next(err); }
  },
  async create(req, res, next) {
    try {
      const data = validateMasterItem(req.body);
      const item = await create(data);
      res.status(201).json(item);
    } catch (err) { next(err); }
  },
  async update(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      const data = validateMasterItem(req.body);
      const item = await update(id, data);
      res.json(item);
    } catch (err) { next(err); }
  },
  async remove(req, res, next) {
    try {
      const id = parseInt(req.params.id, 10);
      await remove(id);
      res.status(204).end();
    } catch (err) { next(err); }
  },
};

export default masteritemController;