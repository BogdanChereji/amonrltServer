import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProdusPlasaInGol31x11 from '../models/produsPlasaInGol31x11Model.js';
import { isAuth, isAdmin } from '../utils.js';

const produsePlasaInGol31x11Router = express.Router();

produsePlasaInGol31x11Router.get('/', async (req, res) => {
  const produsePlasaInGol31x11 = await ProdusPlasaInGol31x11.find();
  res.send(produsePlasaInGol31x11);
});

produsePlasaInGol31x11Router.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newProdusPlasaInGol31x11 = new ProdusPlasaInGol31x11({
      Nume: req.body.Nume,
      NumeCuloare: req.body.NumeCuloare,
      Pret: req.body.Pret,
    });
    const produsPlasaInGol31x11 = await newProdusPlasaInGol31x11.save();
    res.send({
      message: 'Produsul a fost adăugat',
      produsPlasaInGol31x11,
    });
  })
);

produsePlasaInGol31x11Router.get('/:id', async (req, res) => {
  const produsPlasaInGol31x11 = await ProdusPlasaInGol31x11.findById(
    req.params.id
  );
  if (produsPlasaInGol31x11) {
    res.send(produsPlasaInGol31x11);
  } else {
    res.status(404).send({ message: 'Produsul nu a fost gasit' });
  }
});

produsePlasaInGol31x11Router.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produsPlasaInGol31x11 = await ProdusPlasaInGol31x11.findById(
      req.params.id
    );
    if (produsPlasaInGol31x11) {
      await produsPlasaInGol31x11.remove();
      res.send({ message: 'Produs sters' });
    } else {
      res.status(404).send({ message: 'Produsul nu a fost gasit' });
    }
  })
);

export default produsePlasaInGol31x11Router;
