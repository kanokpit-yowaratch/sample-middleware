import express from 'express';
import todoRoutes from './todos.route';

const router = express.Router();

router.use('/todo-list', todoRoutes);

export default router;
