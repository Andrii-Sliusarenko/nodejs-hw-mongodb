import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import router from './routers/contacts.js';
import { logger } from './middlewares/logger.js';
import { notFounHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import authRouter from './routers/auth.js';
import { UPLOAD_DIR } from './constants/index.js';

dotenv.config();
const PORT = Number(process.env.PORT) || 3000;

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(cookieParser());
  app.use(logger);
  app.use('/auth', authRouter);
  app.use('/contacts', router);
  app.use('*', notFounHandler);
  app.use(errorHandler);
  app.use('/uploads', express.static(UPLOAD_DIR));
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
