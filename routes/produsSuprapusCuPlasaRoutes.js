import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProdusSuprapusCuPlasa from '../models/produsSuprapusCuPlasaModel.js';
import { isAuth, isAdmin } from '../utils.js';

const produseSuprapusCuPlasaRouter = express.Router();

produseSuprapusCuPlasaRouter.get('/', async (req, res) => {
  const produseSuprapusCuPlasa = await ProdusSuprapusCuPlasa.find();
  res.send(produseSuprapusCuPlasa);
});

produseSuprapusCuPlasaRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newProdusSuprapusCuPlasa = new ProdusSuprapusCuPlasa({
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
        FixMobilPlasaPeAx: {
          pret: req.body.D195.FixMobilPlasaPeAx.pret,
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
      D195S: {
        SetCasetaSuprapus195: {
          pret: req.body.D195S.SetCasetaSuprapus195.pret,
        },
        Izolatie195: {
          pret: req.body.D195S.Izolatie195.pret,
        },
        ProfilAdaptor: {
          pret: req.body.D195S.ProfilAdaptor.pret,
        },
        AxOctogonal40: {
          pret: req.body.D195S.AxOctogonal40.pret,
        },
        LamelaAluminiu: {
          pret: req.body.D195S.LamelaAluminiu.pret,
        },
        LamelaTerminala: {
          pret: req.body.D195S.LamelaTerminala.pret,
        },
        GarnituraDeContact: {
          pret: req.body.D195S.GarnituraDeContact.pret,
        },
        GhidajPVC: {
          pret: req.body.D195S.GhidajPVC.pret,
        },
        PerieGhidaj: {
          pret: req.body.D195S.PerieGhidaj.pret,
        },
        Inel40: {
          pret: req.body.D195S.Inel40.pret,
        },
        SetAccesorii195: {
          pret: req.body.D195S.SetAccesorii195.pret,
        },
        Banda: {
          pret: req.body.D195S.Banda.pret,
        },
        Automat: {
          pret: req.body.D195S.Automat.pret,
        },
        OpritorPVC: {
          pret: req.body.D195S.OpritorPVC.pret,
        },
        Arriter: {
          pret: req.body.D195S.Arriter.pret,
        },
        SuplimentareAccesorii: {
          pret: req.body.D195S.SuplimentareAccesorii.pret,
        },
      },
      D245S: {
        SetCasetaSuprapus195: {
          pret: req.body.D245S.SetCasetaSuprapus195.pret,
        },
        Izolatie195: {
          pret: req.body.D245S.Izolatie195.pret,
        },
        ProfilAdaptor: {
          pret: req.body.D245S.ProfilAdaptor.pret,
        },
        AxOctogonal40: {
          pret: req.body.D245S.AxOctogonal40.pret,
        },
        LamelaAluminiu: {
          pret: req.body.D245S.LamelaAluminiu.pret,
        },
        LamelaTerminala: {
          pret: req.body.D245S.LamelaTerminala.pret,
        },
        FixMobilPlasaPeAx: {
          pret: req.body.D245S.FixMobilPlasaPeAx.pret,
        },
        GhidajPVC: {
          pret: req.body.D245S.GhidajPVC.pret,
        },
        PerieGhidaj: {
          pret: req.body.D245S.PerieGhidaj.pret,
        },
        Inel40: {
          pret: req.body.D245S.Inel40.pret,
        },
        SetAccesorii195: {
          pret: req.body.D245S.SetAccesorii195.pret,
        },
        Banda: {
          pret: req.body.D245S.Banda.pret,
        },
        Automat: {
          pret: req.body.D245S.Automat.pret,
        },
        OpritorPVC: {
          pret: req.body.D245S.OpritorPVC.pret,
        },
        Arriter: {
          pret: req.body.D245S.Arriter.pret,
        },
        SuplimentareAccesorii: {
          pret: req.body.D245S.SuplimentareAccesorii.pret,
        },
      },
    });
    const produsSuprapusCuPlasa = await newProdusSuprapusCuPlasa.save();
    res.send({ message: 'Produsul a fost adăugat', produsSuprapusCuPlasa });
  })
);

produseSuprapusCuPlasaRouter.get('/:id', async (req, res) => {
  const produsSuprapusCuPlasa = await ProdusSuprapusCuPlasa.findById(
    req.params.id
  );
  if (produsSuprapusCuPlasa) {
    res.send(produsSuprapusCuPlasa);
  } else {
    res.status(404).send({ message: 'Produsul nu a fost gasit' });
  }
});

produseSuprapusCuPlasaRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produsSuprapusCuPlasa = await ProdusSuprapusCuPlasa.findById(
      req.params.id
    );
    if (produsSuprapusCuPlasa) {
      await produsSuprapusCuPlasa.remove();
      res.send({ message: 'Produs sters' });
    } else {
      res.status(404).send({ message: 'Produsul nu a fost gasit' });
    }
  })
);

export default produseSuprapusCuPlasaRouter;
