import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProdusPlasaTipRulou from '../models/produsPlasaTipRulouModel.js';
import { isAuth, isAdmin } from '../utils.js';

const produsePlasaTipRulouRouter = express.Router();

produsePlasaTipRulouRouter.get('/', async (req, res) => {
  const produsePlasaTipRulou = await ProdusPlasaTipRulou.find();
  res.send(produsePlasaTipRulou);
});

produsePlasaTipRulouRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newProdusPlasaTipRulou = new ProdusPlasaTipRulou({
      Nume: req.body.Nume,
      NumeCuloare: req.body.NumeCuloare,
      Pret: req.body.Pret,
    });
    const produsPlasaTipRulou = await newProdusPlasaTipRulou.save();
    res.send({
      message: 'Produsul a fost adăugat',
      produsPlasaTipRulou,
    });
  })
);

produsePlasaTipRulouRouter.get('/:id', async (req, res) => {
  const produsPlasaTipRulou = await ProdusPlasaTipRulou.findById(req.params.id);
  if (produsPlasaTipRulou) {
    res.send(produsPlasaTipRulou);
  } else {
    res.status(404).send({ message: 'Produsul nu a fost gasit' });
  }
});

produsePlasaTipRulouRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produsPlasaTipRulou = await ProdusPlasaTipRulou.findById(
      req.params.id
    );
    if (produsPlasaTipRulou) {
      await produsPlasaTipRulou.remove();
      res.send({ message: 'Produs sters' });
    } else {
      res.status(404).send({ message: 'Produsul nu a fost gasit' });
    }
  })
);

export default produsePlasaTipRulouRouter;
