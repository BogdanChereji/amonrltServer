import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProdusUsaCuPerie from '../models/produsUsaCuPerieModel.js';
import { isAuth, isAdmin } from '../utils.js';

const produseUsaCuPerieRouter = express.Router();

produseUsaCuPerieRouter.get('/', async (req, res) => {
  const produseUsaCuPerie = await ProdusUsaCuPerie.find();
  res.send(produseUsaCuPerie);
});

produseUsaCuPerieRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newProdusUsaCuPerie = new ProdusUsaCuPerie({
      Nume: req.body.Nume,
      NumeCuloare: req.body.NumeCuloare,
      Pret: req.body.Pret,
    });
    const produsUsaCuPerie = await newProdusUsaCuPerie.save();
    res.send({
      message: 'Produsul a fost adăugat',
      produsUsaCuPerie,
    });
  })
);

produseUsaCuPerieRouter.get('/:id', async (req, res) => {
  const produsUsaCuPerie = await ProdusUsaCuPerie.findById(req.params.id);
  if (produsUsaCuPerie) {
    res.send(produsUsaCuPerie);
  } else {
    res.status(404).send({ message: 'Produsul nu a fost gasit' });
  }
});

produseUsaCuPerieRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produsUsaCuPerie = await ProdusUsaCuPerie.findById(req.params.id);
    if (produsUsaCuPerie) {
      await produsUsaCuPerie.remove();
      res.send({ message: 'Produs sters' });
    } else {
      res.status(404).send({ message: 'Produsul nu a fost gasit' });
    }
  })
);

export default produseUsaCuPerieRouter;
