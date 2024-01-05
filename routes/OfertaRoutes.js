import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAuth, isAdmin } from '../utils.js';
import Oferta from '../models/ofertaModel.js';

const ofertaRouter = express.Router();

// Apeleaza toate elementele din oferta
ofertaRouter.get('/', async (req, res) => {
  const oferte = await Oferta.find();
  res.send(oferte);
});

// Apeleaza elementele din oferta introduse de un singur id
ofertaRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const oferte = await Oferta.find({ user: req.user._id });
    res.send(oferte);
  })
);

// Apeleaza un element din oferta dupa id
ofertaRouter.get('/:id', async (req, res) => {
  const oferta = await Oferta.findById(req.params.id);
  if (oferta) {
    res.send(oferta);
  } else {
    res.status(404).send({ message: 'Oferta nu a fost gasita' });
  }
});

// sterge un element din oferta
ofertaRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const oferta = await Oferta.findById(req.params.id);
    if (oferta) {
      await oferta.remove();
      res.send({ message: 'Oferta stersă' });
    } else {
      res.status(404).send({ message: 'Oferta nu a fost gasită' });
    }
  })
);

export default ofertaRouter;
