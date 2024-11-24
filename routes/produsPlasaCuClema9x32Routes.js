import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProdusPlasaCuCleme9x32 from '../models/produsPlasaCuCleme9x32Model.js';
import { isAuth, isAdmin } from '../utils.js';

const produsePlasaCuCleme9x32Router = express.Router();

produsePlasaCuCleme9x32Router.get('/', async (req, res) => {
  const produsePlasaCuCleme9x32 = await ProdusPlasaCuCleme9x32.find();
  res.send(produsePlasaCuCleme9x32);
});

produsePlasaCuCleme9x32Router.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newProdusPlasaCuCleme9x32 = new ProdusPlasaCuCleme9x32({
      Nume: req.body.Nume,
      NumeCuloare: req.body.NumeCuloare,
      Pret: req.body.Pret,
    });
    const produsPlasaCuCleme9x32 = await newProdusPlasaCuCleme9x32.save();
    res.send({ message: 'Produsul a fost adăugat', produsPlasaCuCleme9x32 });
  })
);

produsePlasaCuCleme9x32Router.get('/:id', async (req, res) => {
  const produsPlasaCuCleme9x32 = await ProdusPlasaCuCleme9x32.findById(
    req.params.id
  );
  if (produsPlasaCuCleme9x32) {
    res.send(produsPlasaCuCleme9x32);
  } else {
    res.status(404).send({ message: 'Produsul nu a fost gasit' });
  }
});

produsePlasaCuCleme9x32Router.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produsPlasaCuCleme9x32 = await ProdusPlasaCuCleme9x32.findById(
      req.params.id
    );
    if (produsPlasaCuCleme9x32) {
      await produsPlasaCuCleme9x32.remove();
      res.send({ message: 'Produs sters' });
    } else {
      res.status(404).send({ message: 'Produsul nu a fost gasit' });
    }
  })
);

export default produsePlasaCuCleme9x32Router;
