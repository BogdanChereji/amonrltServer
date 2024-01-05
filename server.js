import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import produsRouter from './routes/produsRoutes.js';
import userRouter from './routes/userRoutes.js';
import seedRouter from './routes/seedRoutes.js';
import cartRouter from './routes/cartRoutes.js';
import ofertaRouter from './routes/OfertaRoutes.js';
import produseCuPlasaRouter from './routes/produsCuPlasaRoutes.js';

dotenv.config();

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('baza de date este conectata');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get('/', (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.send('Api is runing..');
});

app.use('/api/produse', produsRouter);
app.use('/api/produsecuplasa', produseCuPlasaRouter);
app.use('/api/users', userRouter);
app.use('/api/seed', seedRouter);
app.use('/api/cart', cartRouter);
app.use('/api/oferte', ofertaRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
