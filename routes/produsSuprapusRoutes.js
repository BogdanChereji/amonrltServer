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
      D195: {
        SetCasetaSuprapus195: {
          pret: req.body.D195.SetCasetaSuprapus195.pret,
        },
        Izolatie195: {
          pret: req.body.D195.Izolatie195.pret,
        },
        ProfilAdaptor: {
          pret: req.body.D195.ProfilAdaptor.pret,
        },
        AxOctogonal40: {
          pret: req.body.D195.AxOctogonal40.pret,
        },
        LamelaAluminiu: {
          pret: req.body.D195.LamelaAluminiu.pret,
        },
        LamelaTerminala: {
          pret: req.body.D195.LamelaTerminala.pret,
        },
        GarnituraDeContact: {
          pret: req.body.D195.GarnituraDeContact.pret,
        },
        GhidajPVC: {
          pret: req.body.D195.GhidajPVC.pret,
        },
        PerieGhidaj: {
          pret: req.body.D195.PerieGhidaj.pret,
        },
        Inel40: {
          pret: req.body.D195.Inel40.pret,
        },
        SetAccesorii195: {
          pret: req.body.D195.SetAccesorii195.pret,
        },
        Banda: {
          pret: req.body.D195.Banda.pret,
        },
        Automat: {
          pret: req.body.D195.Automat.pret,
        },
        OpritorPVC: {
          pret: req.body.D195.OpritorPVC.pret,
        },
        Arriter: {
          pret: req.body.D195.Arriter.pret,
        },
        SuplimentareAccesorii: {
          pret: req.body.D195.SuplimentareAccesorii.pret,
        },
      },
      D245: {
        SetCasetaSuprapus195: {
          pret: req.body.D245.SetCasetaSuprapus195.pret,
        },
        Izolatie195: {
          pret: req.body.D245.Izolatie195.pret,
        },
        ProfilAdaptor: {
          pret: req.body.D245.ProfilAdaptor.pret,
        },
        AxOctogonal40: {
          pret: req.body.D245.AxOctogonal40.pret,
        },
        LamelaAluminiu: {
          pret: req.body.D245.LamelaAluminiu.pret,
        },
        LamelaTerminala: {
          pret: req.body.D245.LamelaTerminala.pret,
        },
        FixMobilPlasaPeAx: {
          pret: req.body.D245.FixMobilPlasaPeAx.pret,
        },
        GhidajPVC: {
          pret: req.body.D245.GhidajPVC.pret,
        },
        PerieGhidaj: {
          pret: req.body.D245.PerieGhidaj.pret,
        },
        Inel40: {
          pret: req.body.D245.Inel40.pret,
        },
        SetAccesorii195: {
          pret: req.body.D245.SetAccesorii195.pret,
        },
        Banda: {
          pret: req.body.D245.Banda.pret,
        },
        Automat: {
          pret: req.body.D245.Automat.pret,
        },
        OpritorPVC: {
          pret: req.body.D245.OpritorPVC.pret,
        },
        Arriter: {
          pret: req.body.D245.Arriter.pret,
        },
        SuplimentareAccesorii: {
          pret: req.body.D245.SuplimentareAccesorii.pret,
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
