import express from 'express'
import { showtasks, createtask, deletetask } from '../controllers/task.js'
import task from '../models/task.js';

const router = express.Router();

router.get('/', showtasks);
router.post('/', createtask);
router.delete('/:id', deletetask);
export default router; 