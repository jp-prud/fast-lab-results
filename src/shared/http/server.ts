import express from 'express';
import cors from 'cors';
import router from './routes';
import errorHandler from './middlewares/errorHandler';

const app = express();

try {
  const PORT = 3001;
  app.use(cors());
  app.use(express.json());
  app.use(router);
  app.use(errorHandler);
  app.listen(PORT, () => {
    console.log(`🔥 Server listening in http://localhost:${PORT}`);
  });
} catch (e) {
  console.log(e);
}
