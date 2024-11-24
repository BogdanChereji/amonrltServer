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
import produseTencuibilRouter from './routes/produsTencuibilRoutes.js';
import produseTencuibilCuPlasaRouter from './routes/produseTencuibilCuPlasaRoutes.js';
import produseSuprapusRouter from './routes/produsSuprapusRoutes.js';
import produseSuprapusCuPlasaRouter from './routes/produsSuprapusCuPlasaRoutes.js';
import produsePVCRouter from './routes/produsPVCRoutes.js';
import produsePlasaCuBalamale17x25Router from './routes/produsPlasaCuBalamale17x25Routes.js';
import produsePlasaCuCleme9x32Router from './routes/produsPlasaCuClema9x32Routes.js';
import produsePlasaInGol31x11Router from './routes/produsPlasaInGol31x11Routes.js';
import produsePlasaTipRulouRouter from './routes/produsPlasaTipRulouRoutes.js';
import produseUsaCuPerieRouter from './routes/produsUsaCuPerieRoutes.js';
import produseUsaMagneticaRouter from './routes/produsUsaMagneticaRoutes.js';

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
app.use('/api/produsetencuibil', produseTencuibilRouter);
app.use('/api/users', userRouter);
app.use('/api/seed', seedRouter);
app.use('/api/cart', cartRouter);
app.use('/api/oferte', ofertaRouter);
app.use('/api/produsetencuibilcuplasa', produseTencuibilCuPlasaRouter);
app.use('/api/produsesuprapus', produseSuprapusRouter);
app.use('/api/produsesuprapusCuPlasa', produseSuprapusCuPlasaRouter);
app.use('/api/produsePVC', produsePVCRouter);
app.use('/api/produsePlasaCuBalamale17x25', produsePlasaCuBalamale17x25Router);
app.use('/api/produsePlasaCuClema9x32', produsePlasaCuCleme9x32Router);
app.use('/api/produsePlasaInGol31x11', produsePlasaInGol31x11Router);
app.use('/api/produsePlasaTipRulou', produsePlasaTipRulouRouter);
app.use('/api/produseUsaCuPerie', produseUsaCuPerieRouter);
app.use('/api/produseUsaMagnetica', produseUsaMagneticaRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
