import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProdusTencuibil from '../models/produsTencuibilModel.js';
import { isAuth, isAdmin } from '../utils.js';

const produsTencuibilRouter = express.Router();

produsTencuibilRouter.get('/', async (req, res) => {
  const produseTencuibil = await ProdusTencuibil.find();
  res.send(produseTencuibil);
});

produsTencuibilRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newProdusTencuibil = new ProdusTencuibil({
      Nume: req.body.Nume,
      NumeCuloare: req.body.NumeCuloare,
      D165: {
        TocRulouTencuibil165pe20: {
          pret: req.body.D165.TocRulouTencuibil165pe20.pret,
        },
        SinaTencuibilaPanelService: {
          pret: req.body.D165.SinaTencuibilaPanelService.pret,
        },
        PanelService165pe20: {
          pret: req.body.D165.PanelService165pe20.pret,
        },
        PolistirenExtrudat: {
          pret: req.body.D165.PolistirenExtrudat.pret,
        },
        AxOctogonal40: {
          pret: req.body.D165.AxOctogonal40.pret,
        },
        LamelaAluminiu: {
          pret: req.body.D165.LamelaAluminiu.pret,
        },
        LamelaTerminala: {
          pret: req.body.D165.LamelaTerminala.pret,
        },
        GarnituraDeContact: {
          pret: req.body.D165.GarnituraDeContact.pret,
        },
        GhidajAlu: {
          pret: req.body.D165.GhidajAlu.pret,
        },
        PerieGhidaj: {
          pret: req.body.D165.PerieGhidaj.pret,
        },
        AgatatorCovor170: {
          pret: req.body.D165.AgatatorCovor170.pret,
        },
        Inel40: {
          pret: req.body.D165.Inel40.pret,
        },
        CapacLateral165pe20: {
          pret: req.body.D165.CapacLateral165pe20.pret,
        },
        Fulie165: {
          pret: req.body.D165.Fulie165.pret,
        },
        Dop40: {
          pret: req.body.D165.Dop40.pret,
        },
        Rulment: {
          pret: req.body.D165.Rulment.pret,
        },
        Snur: {
          pret: req.body.D165.Snur.pret,
        },
        PalnieGhidaj: {
          pret: req.body.D165.PalnieGhidaj.pret,
        },
        OrnamentPlastic: {
          pret: req.body.D165.OrnamentPlastic.pret,
        },
        RolaPlastic: {
          pret: req.body.D165.RolaPlastic.pret,
        },
        ArcCilindric: {
          pret: req.body.D165.ArcCilindric.pret,
        },
        Automat: {
          pret: req.body.D165.Automat.pret,
        },
        OpritorAscuns: {
          pret: req.body.D165.OpritorAscuns.pret,
        },
        Arriter: {
          pret: req.body.D165.Arriter.pret,
        },
      },
      D180: {
        TocRulouTencuibil165pe20: {
          pret: req.body.D180.TocRulouTencuibil165pe20.pret,
        },
        SinaTencuibilaPanelService: {
          pret: req.body.D180.SinaTencuibilaPanelService.pret,
        },
        PanelService165pe20: {
          pret: req.body.D180.PanelService165pe20.pret,
        },
        PolistirenExtrudat: {
          pret: req.body.D180.PolistirenExtrudat.pret,
        },
        AxOctogonal60: {
          pret: req.body.D180.AxOctogonal60.pret,
        },
        LamelaAluminiu: {
          pret: req.body.D180.LamelaAluminiu.pret,
        },
        LamelaTerminala: {
          pret: req.body.D180.LamelaTerminala.pret,
        },
        GarnituraDeContact: {
          pret: req.body.D180.GarnituraDeContact.pret,
        },
        GhidajAlu: {
          pret: req.body.D180.GhidajAlu.pret,
        },
        PerieGhidaj: {
          pret: req.body.D180.PerieGhidaj.pret,
        },
        AgatatorCovor170: {
          pret: req.body.D180.AgatatorCovor170.pret,
        },
        Inel60: {
          pret: req.body.D180.Inel60.pret,
        },
        CapacLateral165pe20: {
          pret: req.body.D180.CapacLateral165pe20.pret,
        },
        Fulie165: {
          pret: req.body.D180.Fulie165.pret,
        },
        Dop60: {
          pret: req.body.D180.Dop60.pret,
        },
        Rulment: {
          pret: req.body.D180.Rulment.pret,
        },
        Snur: {
          pret: req.body.D180.Snur.pret,
        },
        PalnieGhidaj: {
          pret: req.body.D180.PalnieGhidaj.pret,
        },
        OrnamentPlastic: {
          pret: req.body.D180.OrnamentPlastic.pret,
        },
        RolaPlastic: {
          pret: req.body.D180.RolaPlastic.pret,
        },
        ArcCilindric: {
          pret: req.body.D180.ArcCilindric.pret,
        },
        Automat: {
          pret: req.body.D180.Automat.pret,
        },
        OpritorAscuns: {
          pret: req.body.D180.OpritorAscuns.pret,
        },
        Arriter: {
          pret: req.body.D180.Arriter.pret,
        },
      },
    });
    const produsTencuibil = await newProdusTencuibil.save();
    res.send({ message: 'Produsul a fost adăugat', produsTencuibil });
  })
);

produsTencuibilRouter.get('/:id', async (req, res) => {
  const produsTencuibil = await ProdusTencuibil.findById(req.params.id);
  if (produsTencuibil) {
    res.send(produsTencuibil);
  } else {
    res.status(404).send({ message: 'Produsul nu a fost gasit' });
  }
});

produsTencuibilRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produsTencuibil = await ProdusTencuibil.findById(req.params.id);
    if (produsTencuibil) {
      await produsTencuibil.remove();
      res.send({ message: 'Produs sters' });
    } else {
      res.status(404).send({ message: 'Produsul nu a fost gasit' });
    }
  })
);

export default produsTencuibilRouter;
