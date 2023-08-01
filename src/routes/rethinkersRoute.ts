import { Router } from 'express';
import rethinkersController from '../controllers/rethinkersController';

const notifications: Router = Router();

notifications.post('/insert-rethinker', rethinkersController.registerRethinker);
notifications.get('/rethinkers', rethinkersController.getAllRethinkers);

export default notifications;