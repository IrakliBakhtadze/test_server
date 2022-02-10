import express, { Application } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import { testRoutes } from './routes';
import { DEV_PORT, PROD_PORT, CLIENT_URL } from './configs';

const MODE = process.argv[2] || 'development';
const PORT = MODE === 'development' ? DEV_PORT : PROD_PORT;

const app: Application = express();
app.use(
  express.json({
    limit: '2mb',
  })
);
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: CLIENT_URL,
  })
);
app.use(helmet());
app.use('/api/', testRoutes);

(function start() {
  try {
    app.listen(PORT, () => {
      console.log('\x1b[33m', '===================================================================');
      console.log('\x1b[32m', `============== \u{1F680} Server is running on port: ${PORT} \u{1F680} ==============`);
      console.log('\x1b[33m%s\x1b[0m', ' ===================================================================');
    });
  } catch (error) {
    process.exit(1);
  }
})();
