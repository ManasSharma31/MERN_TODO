import express from 'express';
import { createTodo, readTodo } from '../controller/todo.js';
const router = express.Router();

router.get('/', readTodo);
router.post('/', createTodo);

export default router;