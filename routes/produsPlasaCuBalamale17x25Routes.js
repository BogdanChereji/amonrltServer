import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProdusPlasaCuBalamale17x25 from '../models/produsPlasaCuBalamale17x25Model.js';
import { isAuth, isAdmin } from '../utils.js';

const produsePlasaCuBalamale17x25Router = express.Router();

produsePlasaCuBalamale17x25Router.get('/', async (req, res) => {
  const produsePlasaCuBalamale17x25 = await ProdusPlasaCuBalamale17x25.find();
  res.send(produsePlasaCuBalamale17x25);
});

produsePlasaCuBalamale17x25Router.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newProdusPlasaCuBalamale17x25 = new ProdusPlasaCuBalamale17x25({
      Nume: req.body.Nume,
      NumeCuloare: req.body.NumeCuloare,
      Pret: req.body.Pret,
    });
    const produsPlasaCuBalamale17x25 =
      await newProdusPlasaCuBalamale17x25.save();
    res.send({
      message: 'Produsul a fost adăugat',
      produsPlasaCuBalamale17x25,
    });
  })
);

produsePlasaCuBalamale17x25Router.get('/:id', async (req, res) => {
  const produsPlasaCuBalamale17x25 = await ProdusPlasaCuBalamale17x25.findById(
    req.params.id
  );
  if (produsPlasaCuBalamale17x25) {
    res.send(produsPlasaCuBalamale17x25);
  } else {
    res.status(404).send({ message: 'Produsul nu a fost gasit' });
  }
});

produsePlasaCuBalamale17x25Router.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produsPlasaCuBalamale17x25 =
      await ProdusPlasaCuBalamale17x25.findById(req.params.id);
    if (produsPlasaCuBalamale17x25) {
      await produsPlasaCuBalamale17x25.remove();
      res.send({ message: 'Produs sters' });
    } else {
      res.status(404).send({ message: 'Produsul nu a fost gasit' });
    }
  })
);

export default produsePlasaCuBalamale17x25Router;
