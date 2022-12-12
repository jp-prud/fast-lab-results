import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import router from './routes';
import { errors } from 'celebrate';
import errorHandler from './middlewares/errorHandler';

import '@shared/database';

const app = express();

try {
  const PORT = 3001;
  app.use(cors());
  app.use(express.json());
  app.use(router);
  app.use(errors());
  app.use(errorHandler);
  app.listen(PORT, () => {
    console.log(`🔥 Server listening in http://localhost:${PORT}`);
  });
} catch (e) {
  console.log(e);
}
