import express from 'express';
import { createTodo, deleteTodo, readTodo, updateTodo } from '../controller/todo.js';
const router = express.Router();

router.get('/', readTodo);
router.post('/', createTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;