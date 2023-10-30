import './config/env.config';
import Express from 'express';
import morgan from 'morgan';
import { connectDB } from './config/db.config';
const app = Express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('Hiya, how you doing?');
});

connectDB();

app.listen(PORT, () => {
  console.log(`[LISTENING] Port ${PORT}`);
});
