import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProdusTencuibilCuPlasa from '../models/produsTencuibilCuPlasaModel.js';
import { isAuth, isAdmin } from '../utils.js';

const produseTencuibilCuPlasaRouter = express.Router();

produseTencuibilCuPlasaRouter.get('/', async (req, res) => {
  const produseTencuibilCuPlasa = await ProdusTencuibilCuPlasa.find();
  res.send(produseTencuibilCuPlasa);
});

produseTencuibilCuPlasaRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newProdusTencuibilCuPlasa = new ProdusTencuibilCuPlasa({
      Nume: req.body.Nume,
      NumeCuloare: req.body.NumeCuloare,
      D165: {
        TocTenc165pe20: {
          pret: req.body.D165.TocTenc165pe20.pret,
        },
        SinaDeTencuire20: {
          pret: req.body.D165.SinaDeTencuire20.pret,
        },
        LamelaAluminiu: {
          pret: req.body.D165.LamelaAluminiu.pret,
        },
        LamelaTerminala: {
          pret: req.body.D165.LamelaTerminala.pret,
        },
        PanelServIz165pe20: {
          pret: req.body.D165.PanelServIz165pe20.pret,
        },
        AxOctogonal40: {
          pret: req.body.D165.AxOctogonal40.pret,
        },
        GhidajAluKombi: {
          pret: req.body.D165.GhidajAluKombi.pret,
        },
        ProfilMobilPlasa: {
          pret: req.body.D165.ProfilMobilPlasa.pret,
        },
        ProfilFixPlasa: {
          pret: req.body.D165.ProfilFixPlasa.pret,
        },
        PerieGhidajPlasa: {
          pret: req.body.D165.PerieGhidajPlasa.pret,
        },
        PlasaPeAx: {
          pret: req.body.D165.PlasaPeAx.pret,
        },
        PerieGhidaj: {
          pret: req.body.D165.PerieGhidaj.pret,
        },
        AgatatorCovor130: {
          pret: req.body.D165.AgatatorCovor130.pret,
        },
        Inel40: {
          pret: req.body.D165.Inel40.pret,
        },
        CapacLateral: {
          pret: req.body.D165.CapacLateral.pret,
        },
        Fulie: {
          pret: req.body.D165.Fulie.pret,
        },
        Dop: {
          pret: req.body.D165.Dop.pret,
        },
        KitPlasa: {
          pret: req.body.D165.KitPlasa.pret,
        },
        Rulment: {
          pret: req.body.D165.Rulment.pret,
        },
        Snur: {
          pret: req.body.D165.Snur.pret,
        },
        Automat: {
          pret: req.body.D165.Automat.pret,
        },
        OpritorAscuns: {
          pret: req.body.D165.OpritorAscuns.pret,
        },
        PalnieGhidaj: {
          pret: req.body.D165.PalnieGhidaj.pret,
        },
        OrnamentPlastic: {
          pret: req.body.D165.OrnamentPlastic.pret,
        },
        RolaPlasticCuCilindru: {
          pret: req.body.D165.RolaPlasticCuCilindru.pret,
        },
        ArcCilindric: {
          pret: req.body.D165.ArcCilindric.pret,
        },
        Arriter: {
          pret: req.body.D165.Arriter.pret,
        },
      },
      D180: {
        TocTenc180pe20: {
          pret: req.body.D180.TocTenc180pe20.pret,
        },
        SinaDeTencuire20: {
          pret: req.body.D180.SinaDeTencuire20.pret,
        },
        LamelaAluminiu: {
          pret: req.body.D180.LamelaAluminiu.pret,
        },
        LamelaTerminala: {
          pret: req.body.D180.LamelaTerminala.pret,
        },
        PanelServIz180pe20: {
          pret: req.body.D180.PanelServIz180pe20.pret,
        },
        AxOctogonal40: {
          pret: req.body.D180.AxOctogonal40.pret,
        },
        GhidajAluKombi: {
          pret: req.body.D180.GhidajAluKombi.pret,
        },
        ProfilMobilPlasa: {
          pret: req.body.D180.ProfilMobilPlasa.pret,
        },
        ProfilFixPlasa: {
          pret: req.body.D180.ProfilFixPlasa.pret,
        },
        PerieGhidajPlasa: {
          pret: req.body.D180.PerieGhidajPlasa.pret,
        },
        PlasaPeAx: {
          pret: req.body.D180.PlasaPeAx.pret,
        },
        PerieGhidaj: {
          pret: req.body.D180.PerieGhidaj.pret,
        },
        AgatatorCovor130: {
          pret: req.body.D180.AgatatorCovor130.pret,
        },
        Inel40: {
          pret: req.body.D180.Inel40.pret,
        },
        CapacLateral: {
          pret: req.body.D180.CapacLateral.pret,
        },
        Fulie: {
          pret: req.body.D180.Fulie.pret,
        },
        Dop: {
          pret: req.body.D180.Dop.pret,
        },
        KitPlasa: {
          pret: req.body.D180.KitPlasa.pret,
        },
        Rulment: {
          pret: req.body.D180.Rulment.pret,
        },
        Snur: {
          pret: req.body.D180.Snur.pret,
        },
        Automat: {
          pret: req.body.D180.Automat.pret,
        },
        OpritorAscuns: {
          pret: req.body.D180.OpritorAscuns.pret,
        },
        PalnieGhidaj: {
          pret: req.body.D180.PalnieGhidaj.pret,
        },
        OrnamentPlastic: {
          pret: req.body.D180.OrnamentPlastic.pret,
        },
        RolaPlasticCuCilindru: {
          pret: req.body.D180.RolaPlasticCuCilindru.pret,
        },
        ArcCilindric: {
          pret: req.body.D180.ArcCilindric.pret,
        },
        Arriter: {
          pret: req.body.D180.Arriter.pret,
        },
      },
      D205: {
        TocTenc205pe20: {
          pret: req.body.D205.TocTenc205pe20.pret,
        },
        SinaDeTencuire20: {
          pret: req.body.D205.SinaDeTencuire20.pret,
        },
        LamelaAluminiu: {
          pret: req.body.D205.LamelaAluminiu.pret,
        },
        LamelaTerminala: {
          pret: req.body.D205.LamelaTerminala.pret,
        },
        PanelServIz205pe20: {
          pret: req.body.D205.PanelServIz205pe20.pret,
        },
        AxOctogonal40: {
          pret: req.body.D205.AxOctogonal40.pret,
        },
        GhidajAluKombi: {
          pret: req.body.D205.GhidajAluKombi.pret,
        },
        ProfilMobilPlasa: {
          pret: req.body.D205.ProfilMobilPlasa.pret,
        },
        ProfilFixPlasa: {
          pret: req.body.D205.ProfilFixPlasa.pret,
        },
        PerieGhidajPlasa: {
          pret: req.body.D205.PerieGhidajPlasa.pret,
        },
        PlasaPeAx: {
          pret: req.body.D205.PlasaPeAx.pret,
        },
        PerieGhidaj: {
          pret: req.body.D205.PerieGhidaj.pret,
        },
        AgatatorCovor130: {
          pret: req.body.D205.AgatatorCovor130.pret,
        },
        Inel40: {
          pret: req.body.D205.Inel40.pret,
        },
        CapacLateral: {
          pret: req.body.D205.CapacLateral.pret,
        },
        Fulie: {
          pret: req.body.D205.Fulie.pret,
        },
        Dop: {
          pret: req.body.D205.Dop.pret,
        },
        KitPlasa: {
          pret: req.body.D205.KitPlasa.pret,
        },
        Rulment: {
          pret: req.body.D205.Rulment.pret,
        },
        Snur: {
          pret: req.body.D205.Snur.pret,
        },
        Automat: {
          pret: req.body.D205.Automat.pret,
        },
        OpritorAscuns: {
          pret: req.body.D205.OpritorAscuns.pret,
        },
        PalnieGhidaj: {
          pret: req.body.D205.PalnieGhidaj.pret,
        },
        OrnamentPlastic: {
          pret: req.body.D205.OrnamentPlastic.pret,
        },
        RolaPlasticCuCilindru: {
          pret: req.body.D205.RolaPlasticCuCilindru.pret,
        },
        ArcCilindric: {
          pret: req.body.D205.ArcCilindric.pret,
        },
        Arriter: {
          pret: req.body.D205.Arriter.pret,
        },
      },
    });
    const produsTencuibilCuPlasa = await newProdusTencuibilCuPlasa.save();
    res.send({ message: 'Produsul a fost adăugat', produsTencuibilCuPlasa });
  })
);

produseTencuibilCuPlasaRouter.get('/:id', async (req, res) => {
  const produsTencuibilCuPlasa = await ProdusTencuibilCuPlasa.findById(
    req.params.id
  );
  if (produsTencuibilCuPlasa) {
    res.send(produsTencuibilCuPlasa);
  } else {
    res.status(404).send({ message: 'Produsul nu a fost gasit' });
  }
});

produseTencuibilCuPlasaRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produsTencuibilCuPlasa = await ProdusTencuibilCuPlasa.findById(
      req.params.id
    );
    if (produsTencuibilCuPlasa) {
      await produsTencuibilCuPlasa.remove();
      res.send({ message: 'Produs sters' });
    } else {
      res.status(404).send({ message: 'Produsul nu a fost gasit' });
    }
  })
);

export default produseTencuibilCuPlasaRouter;
