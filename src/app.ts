import './config/env.config';
import Express from 'express';
import morgan from 'morgan';
import { connectDB } from './config/db.config';
const app = Express();
const PORT = process.env.PORT || 3000;
import cors from 'cors';

app.use(morgan('dev'));
app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ active: true });
});

connectDB();

app.listen(PORT, () => {
  console.log(`[LISTENING] Port ${PORT}`);
});
