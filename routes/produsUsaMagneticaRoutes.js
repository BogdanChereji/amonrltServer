import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProdusUsaMagnetica from '../models/produsUsaMagneticaModel.js';
import { isAuth, isAdmin } from '../utils.js';

const produseUsaMagneticaRouter = express.Router();

produseUsaMagneticaRouter.get('/', async (req, res) => {
  const produseUsaMagnetica = await ProdusUsaMagnetica.find();
  res.send(produseUsaMagnetica);
});

produseUsaMagneticaRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newProdusUsaMagnetica = new ProdusUsaMagnetica({
      Nume: req.body.Nume,
      NumeCuloare: req.body.NumeCuloare,
      Pret: req.body.Pret,
    });
    const produsUsaMagnetica = await newProdusUsaMagnetica.save();
    res.send({
      message: 'Produsul a fost adăugat',
      produsUsaMagnetica,
    });
  })
);

produseUsaMagneticaRouter.get('/:id', async (req, res) => {
  const produsUsaMagnetica = await ProdusUsaMagnetica.findById(req.params.id);
  if (produsUsaMagnetica) {
    res.send(produsUsaMagnetica);
  } else {
    res.status(404).send({ message: 'Produsul nu a fost gasit' });
  }
});

produseUsaMagneticaRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produsUsaMagnetica = await ProdusUsaMagnetica.findById(req.params.id);
    if (produsUsaMagnetica) {
      await produsUsaMagnetica.remove();
      res.send({ message: 'Produs sters' });
    } else {
      res.status(404).send({ message: 'Produsul nu a fost gasit' });
    }
  })
);

export default produseUsaMagneticaRouter;
