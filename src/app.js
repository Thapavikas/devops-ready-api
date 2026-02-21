import express from 'express';
import logger from './config/logger.js';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.routes.js";
const app = express();



app.use(helmet());
app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(
  morgan('combined', {
    stream: { write: message => logger.info(message.trim()) },
  })
);
app.use(cookieParser());

app.get('/', (req, res) => {
  logger.info('Hello form devops api');
  logger.error('Error form devops api');
  logger.warn('Warning form devops api');
  logger.debug('Debug form devops api');
  logger.verbose('Verbose form devops api');
  logger.silly('Silly form devops api');
  logger.http('Http form devops api');
  logger.debug('Debug form devops api');
  res.status(200).send('Hello form devops api');
});

app.use('/api/auth', authRoutes)

export default app;