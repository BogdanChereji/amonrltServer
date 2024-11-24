import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProdusPVC from '../models/produsPVCModel.js';
import { isAuth, isAdmin } from '../utils.js';

const produsePVCRouter = express.Router();

produsePVCRouter.get('/', async (req, res) => {
  const produsePVC = await ProdusPVC.find();
  res.send(produsePVC);
});

produsePVCRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newProdusPVC = new ProdusPVC({
      Nume: req.body.Nume,
      NumeCuloare: req.body.NumeCuloare,
      Pret: req.body.Pret,
    });
    const produsPVC = await newProdusPVC.save();
    res.send({ message: 'Produsul a fost adăugat', produsPVC });
  })
);

produsePVCRouter.get('/:id', async (req, res) => {
  const produsPVC = await ProdusPVC.findById(req.params.id);
  if (produsPVC) {
    res.send(produsPVC);
  } else {
    res.status(404).send({ message: 'Produsul nu a fost gasit' });
  }
});

produsePVCRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produsPVC = await ProdusPVC.findById(req.params.id);
    if (produsPVC) {
      await produsPVC.remove();
      res.send({ message: 'Produs sters' });
    } else {
      res.status(404).send({ message: 'Produsul nu a fost gasit' });
    }
  })
);

export default produsePVCRouter;
