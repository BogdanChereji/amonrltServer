import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProdusSuprapus from '../models/produsSuprapusModel.js';
import { isAuth, isAdmin } from '../utils.js';

const produseSuprapusRouter = express.Router();

produseSuprapusRouter.get('/', async (req, res) => {
  const produseSuprapus = await ProdusSuprapus.find();
  res.send(produseSuprapus);
});

produseSuprapusRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newProdusSuprapus = new ProdusSuprapus({
      Nume: req.body.Nume,
      NumeCuloare: req.body.NumeCuloare,
      D200: {
        SetCasetaSuprapus195: {
          pret: req.body.D200.SetCasetaSuprapus195.pret,
        },
        Izolatie195: {
          pret: req.body.D200.Izolatie195.pret,
        },
        ProfilAdaptor: {
          pret: req.body.D200.ProfilAdaptor.pret,
        },
        AxOctogonal40: {
          pret: req.body.D200.AxOctogonal40.pret,
        },
        LamelaAluminiu: {
          pret: req.body.D200.LamelaAluminiu.pret,
        },
        LamelaTerminala: {
          pret: req.body.D200.LamelaTerminala.pret,
        },
        GarnituraDeContact: {
          pret: req.body.D200.GarnituraDeContact.pret,
        },
        GhidajPVC: {
          pret: req.body.D200.GhidajPVC.pret,
        },
        PerieGhidaj: {
          pret: req.body.D200.PerieGhidaj.pret,
        },
        Inel40: {
          pret: req.body.D200.Inel40.pret,
        },
        SetAccesorii195: {
          pret: req.body.D200.SetAccesorii195.pret,
        },
        Banda: {
          pret: req.body.D200.Banda.pret,
        },
        Automat: {
          pret: req.body.D200.Automat.pret,
        },
        OpritorPVC: {
          pret: req.body.D200.OpritorPVC.pret,
        },
        Arriter: {
          pret: req.body.D200.Arriter.pret,
        },
        SuplimentareAccesorii: {
          pret: req.body.D200.SuplimentareAccesorii.pret,
        },
      },
    });
    const produsSuprapus = await newProdusSuprapus.save();
    res.send({ message: 'Produsul a fost adăugat', produsSuprapus });
  })
);

produseSuprapusRouter.get('/:id', async (req, res) => {
  const produsSuprapus = await ProdusSuprapus.findById(req.params.id);
  if (produsSuprapus) {
    res.send(produsSuprapus);
  } else {
    res.status(404).send({ message: 'Produsul nu a fost gasit' });
  }
});

produseSuprapusRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produsSuprapus = await ProdusSuprapus.findById(req.params.id);
    if (produsSuprapus) {
      await produsSuprapus.remove();
      res.send({ message: 'Produs sters' });
    } else {
      res.status(404).send({ message: 'Produsul nu a fost gasit' });
    }
  })
);

export default produseSuprapusRouter;
