import express from 'express';

import { getAll, addOnce, getById, deleteOnce, updateOnce } from '../controllers/categorieController.js';

const router = express.Router();


router.get('/', getAll);

router.get('/:id', getById);
router.post('/', addOnce);
router.delete('/:id', deleteOnce);
router.put('/:id', updateOnce);

export default router;