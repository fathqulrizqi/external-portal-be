import express from 'express';
import distroPOMasterAchievementController from '../../areas/distro-po/controller/distroPOMasterAchievementController.js';
import { validateMasterAchievement } from '../../areas/distro-po/validation/distroPOMasterAchievementValidation.js';

const router = express.Router();

// CREATE
router.post('/', (req, res, next) => {
  const error = validateMasterAchievement(req.body);
  if (error) return res.status(400).json({ error });
  return distroPOMasterAchievementController.create(req, res, next);
});

// READ ALL
router.get('/', distroPOMasterAchievementController.getAll);

// READ BY ID
router.get('/:id', distroPOMasterAchievementController.getById);

// UPDATE
router.put('/:id', (req, res, next) => {
  const error = validateMasterAchievement(req.body);
  if (error) return res.status(400).json({ error });
  return distroPOMasterAchievementController.update(req, res, next);
});

// DELETE
router.delete('/:id', distroPOMasterAchievementController.delete);

export default router;
