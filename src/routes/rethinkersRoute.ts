import { Router } from 'express';
import rethinkersController from '../controllers/rethinkersController';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'assets', 'profile-images'));
  },
  filename: function (req, file, cb) {
    cb(null,  file.originalname);
  },
});

const upload = multer({ storage: storage });

const rethinkersRouter = Router();

rethinkersRouter.post('/insert-rethinker', rethinkersController.registerRethinker);
rethinkersRouter.get('/rethinkers', rethinkersController.getAllRethinkers);

rethinkersRouter.post('/upload-photo', upload.single('image'), rethinkersController.uploadPhoto);

rethinkersRouter.get('/assets/profile-images/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, '../assets/profile-images', imageName);

  res.sendFile(imagePath);
});

export default rethinkersRouter;
