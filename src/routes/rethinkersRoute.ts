import { Router } from 'express';
import rethinkersController from '../controllers/rethinkersController';
import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'assets', 'profile-images'));
  },
  filename: function (req, file, cb) {
    /* const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9); */
    cb(null, /* 'profile-image-' + uniqueSuffix + */ file.originalname);
  },
});

const upload = multer({ storage: storage });

const rethinkersRouter = Router();

rethinkersRouter.post('/insert-rethinker', rethinkersController.registerRethinker);
rethinkersRouter.get('/rethinkers', rethinkersController.getAllRethinkers);

// Use o middleware de upload para a rota /upload-photo
rethinkersRouter.post('/upload-photo', upload.single('image'), rethinkersController.uploadPhoto);

rethinkersRouter.get('/assets/profile-images/:imageName', (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, '../assets/profile-images', imageName);

  // Aqui você precisa ler o arquivo de imagem e enviá-lo na resposta
  // Por exemplo, usando a função 'res.sendFile()':
  res.sendFile(imagePath);
});

export default rethinkersRouter;
