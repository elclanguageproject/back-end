import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import * as url from 'url';
import { join } from 'path';

// Initialize app object/environment
// This will likely change as project gets bigger,
// but will work for now
const app = express();
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
dotenv.config({ path: join(__dirname, '../.env') });
const PORT = process.env.PORT || 3000;

// Express Middlewares
app.use(
  cors({
    credentials: true,
    origin: true,
  }),
);
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.get('/', (req, res) => {
  res.send('hi');
});

// Bind Server to PORT
app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
