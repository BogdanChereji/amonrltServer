import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import ProdusCuPlasa from '../models/produsCuPlasaModel.js';
import { isAuth, isAdmin } from '../utils.js';

const produseCuPlasaRouter = express.Router();

produseCuPlasaRouter.get('/', async (req, res) => {
  const produseCuPlasa = await ProdusCuPlasa.find();
  res.send(produseCuPlasa);
});

produseCuPlasaRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newProdusCuPlasa = new ProdusCuPlasa({
      Nume: req.body.Nume,
      NumeCuloare: req.body.NumeCuloare,
      D165: {
        aluFata: {
          pret: req.body.D165.aluFata.pret,
        },
        aluSpate: {
          pret: req.body.D165.aluSpate.pret,
        },
        lamelaAluminiu: {
          pret: req.body.D165.lamelaAluminiu.pret,
        },
        lamelaTerminala: {
          pret: req.body.D165.lamelaTerminala.pret,
        },
        garnituraDeContact: {
          pret: req.body.D165.garnituraDeContact.pret,
        },
        axOctogonal40: {
          pret: req.body.D165.axOctogonal40.pret,
        },
        ghidajAluKombi: {
          pret: req.body.D165.ghidajAluKombi.pret,
        },
        profilMobilPlasa: {
          pret: req.body.D165.profilMobilPlasa.pret,
        },
        profilFixPlasa: {
          pret: req.body.D165.profilFixPlasa.pret,
        },
        perieGhidajPlasa: {
          pret: req.body.D165.perieGhidajPlasa.pret,
        },
        plasaPeAx: {
          pret: req.body.D165.plasaPeAx.pret,
        },
        perieGhidaj: {
          pret: req.body.D165.perieGhidaj.pret,
        },
        agatatorCovor130: {
          pret: req.body.D165.agatatorCovor130.pret,
        },
        inel40: {
          pret: req.body.D165.inel40.pret,
        },
        capacLateral: {
          pret: req.body.D165.capacLateral.pret,
        },
        fulie: {
          pret: req.body.D165.fulie.pret,
        },
        dop: {
          pret: req.body.D165.dop.pret,
        },
        kitPlasa: {
          pret: req.body.D165.kitPlasa.pret,
        },
        rulment: {
          pret: req.body.D165.rulment.pret,
        },
        snur: {
          pret: req.body.D165.snur.pret,
        },
        automat: {
          pret: req.body.D165.automat.pret,
        },
        opritorAscuns: {
          pret: req.body.D165.opritorAscuns.pret,
        },
        palnieGhidaj: {
          pret: req.body.D165.palnieGhidaj.pret,
        },
        ornamentPlastic: {
          pret: req.body.D165.ornamentPlastic.pret,
        },
        rolaPlasticCuCilindru: {
          pret: req.body.D165.rolaPlasticCuCilindru.pret,
        },
        arcCilindric: {
          pret: req.body.D165.arcCilindric.pret,
        },
        arriter: {
          pret: req.body.D165.arriter.pret,
        },
      },
      D180: {
        aluFata: {
          pret: req.body.D180.aluFata.pret,
        },
        aluSpate: {
          pret: req.body.D180.aluSpate.pret,
        },
        lamelaAluminiu: {
          pret: req.body.D180.lamelaAluminiu.pret,
        },
        lamelaTerminala: {
          pret: req.body.D180.lamelaTerminala.pret,
        },
        garnituraDeContact: {
          pret: req.body.D180.garnituraDeContact.pret,
        },
        axOctogonal40: {
          pret: req.body.D180.axOctogonal40.pret,
        },
        ghidajAluKombi: {
          pret: req.body.D180.ghidajAluKombi.pret,
        },
        profilMobilPlasa: {
          pret: req.body.D180.profilMobilPlasa.pret,
        },
        profilFixPlasa: {
          pret: req.body.D180.profilFixPlasa.pret,
        },
        perieGhidajPlasa: {
          pret: req.body.D180.perieGhidajPlasa.pret,
        },
        plasaPeAx: {
          pret: req.body.D180.plasaPeAx.pret,
        },
        perieGhidaj: {
          pret: req.body.D180.perieGhidaj.pret,
        },
        agatatorCovor130: {
          pret: req.body.D180.agatatorCovor130.pret,
        },
        inel40: {
          pret: req.body.D180.inel40.pret,
        },
        capacLateral: {
          pret: req.body.D180.capacLateral.pret,
        },
        fulie: {
          pret: req.body.D180.fulie.pret,
        },
        dop: {
          pret: req.body.D180.dop.pret,
        },
        kitPlasa: {
          pret: req.body.D180.kitPlasa.pret,
        },
        rulment: {
          pret: req.body.D180.rulment.pret,
        },
        snur: {
          pret: req.body.D180.snur.pret,
        },
        automat: {
          pret: req.body.D180.automat.pret,
        },
        opritorAscuns: {
          pret: req.body.D180.opritorAscuns.pret,
        },
        palnieGhidaj: {
          pret: req.body.D180.palnieGhidaj.pret,
        },
        ornamentPlastic: {
          pret: req.body.D180.ornamentPlastic.pret,
        },
        rolaPlasticCuCilindru: {
          pret: req.body.D180.rolaPlasticCuCilindru.pret,
        },
        arcCilindric: {
          pret: req.body.D180.arcCilindric.pret,
        },
        arriter: {
          pret: req.body.D180.arriter.pret,
        },
      },
      D205: {
        aluFata: {
          pret: req.body.D205.aluFata.pret,
        },
        aluSpate: {
          pret: req.body.D205.aluSpate.pret,
        },
        lamelaAluminiu: {
          pret: req.body.D205.lamelaAluminiu.pret,
        },
        lamelaTerminala: {
          pret: req.body.D205.lamelaTerminala.pret,
        },
        garnituraDeContact: {
          pret: req.body.D205.garnituraDeContact.pret,
        },
        axOctogonal40: {
          pret: req.body.D205.axOctogonal40.pret,
        },
        ghidajAluKombi: {
          pret: req.body.D205.ghidajAluKombi.pret,
        },
        profilMobilPlasa: {
          pret: req.body.D205.profilMobilPlasa.pret,
        },
        profilFixPlasa: {
          pret: req.body.D205.profilFixPlasa.pret,
        },
        perieGhidajPlasa: {
          pret: req.body.D205.perieGhidajPlasa.pret,
        },
        plasaPeAx: {
          pret: req.body.D205.plasaPeAx.pret,
        },
        perieGhidaj: {
          pret: req.body.D205.perieGhidaj.pret,
        },
        agatatorCovor130: {
          pret: req.body.D205.agatatorCovor130.pret,
        },
        inel40: {
          pret: req.body.D205.inel40.pret,
        },
        capacLateral: {
          pret: req.body.D205.capacLateral.pret,
        },
        fulie: {
          pret: req.body.D205.fulie.pret,
        },
        dop: {
          pret: req.body.D205.dop.pret,
        },
        kitPlasa: {
          pret: req.body.D205.kitPlasa.pret,
        },
        rulment: {
          pret: req.body.D205.rulment.pret,
        },
        snur: {
          pret: req.body.D205.snur.pret,
        },
        automat: {
          pret: req.body.D205.automat.pret,
        },
        opritorAscuns: {
          pret: req.body.D205.opritorAscuns.pret,
        },
        palnieGhidaj: {
          pret: req.body.D205.palnieGhidaj.pret,
        },
        ornamentPlastic: {
          pret: req.body.D205.ornamentPlastic.pret,
        },
        rolaPlasticCuCilindru: {
          pret: req.body.D205.rolaPlasticCuCilindru.pret,
        },
        arcCilindric: {
          pret: req.body.D205.arcCilindric.pret,
        },
        arriter: {
          pret: req.body.D205.arriter.pret,
        },
      },
    });
    const produsCuPlasa = await newProdusCuPlasa.save();
    res.send({ message: 'Produsul a fost adăugat', produsCuPlasa });
  })
);

produseCuPlasaRouter.get('/:id', async (req, res) => {
  const produsCuPlasa = await ProdusCuPlasa.findById(req.params.id);
  if (produsCuPlasa) {
    res.send(produsCuPlasa);
  } else {
    res.status(404).send({ message: 'Produsul nu a fost gasit' });
  }
});

produseCuPlasaRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produsCuPlasa = await ProdusCuPlasa.findById(req.params.id);
    if (produsCuPlasa) {
      await produsCuPlasa.remove();
      res.send({ message: 'Produs sters' });
    } else {
      res.status(404).send({ message: 'Produsul nu a fost gasit' });
    }
  })
);

export default produseCuPlasaRouter;
