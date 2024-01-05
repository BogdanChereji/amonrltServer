import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Produs from '../models/produsModel.js';
import { isAuth, isAdmin } from '../utils.js';

const produsRouter = express.Router();

produsRouter.get('/', async (req, res) => {
  const produse = await Produs.find();
  res.send(produse);
});

produsRouter.post(
  '/',
  expressAsyncHandler(async (req, res) => {
    const newProdus = new Produs({
      Nume: req.body.Nume,
      NumeCuloare: req.body.NumeCuloare,
      D137: {
        aluFata: {
          pret: req.body.D137.aluFata.pret,
        },
        aluSpate: {
          pret: req.body.D137.aluSpate.pret,
        },
        lamelaAlu: {
          pret: req.body.D137.lamelaAlu.pret,
        },
        lamelaTerminala: {
          pret: req.body.D137.lamelaTerminala.pret,
        },
        garnituraDeContact: {
          pret: req.body.D137.garnituraDeContact.pret,
        },
        axOctogonal40: {
          pret: req.body.D137.axOctogonal40.pret,
        },
        ghidajAlu: {
          pret: req.body.D137.ghidajAlu.pret,
        },
        perieGhidaj: {
          pret: req.body.D137.perieGhidaj.pret,
        },
        agatatorCovor130: {
          pret: req.body.D137.agatatorCovor130.pret,
        },
        inel40: {
          pret: req.body.D137.inel40.pret,
        },
        capacLateral: {
          pret: req.body.D137.capacLateral.pret,
        },
        fulie120: {
          pret: req.body.D137.fulie120.pret,
        },
        dop: {
          pret: req.body.D137.dop.pret,
        },
        rulment: {
          pret: req.body.D137.rulment.pret,
        },
        snur: {
          pret: req.body.D137.snur.pret,
        },
        automat: {
          pret: req.body.D137.automat.pret,
        },
        opritorAscuns: {
          pret: req.body.D137.opritorAscuns.pret,
        },
        palnieGhidaj: {
          pret: req.body.D137.palnieGhidaj.pret,
        },
        ornamentPlastic: {
          pret: req.body.D137.ornamentPlastic.pret,
        },
        rolaPlasticCuCilindru: {
          pret: req.body.D137.rolaPlasticCuCilindru.pret,
        },
        arcCilindru: {
          pret: req.body.D137.arcCilindru.pret,
        },
        arriter: {
          pret: req.body.D137.arriter.pret,
        },
      },
      D165: {
        aluFata: {
          pret: req.body.D165.aluFata.pret,
        },
        aluSpate: {
          pret: req.body.D165.aluSpate.pret,
        },
        lamelaAlu: {
          pret: req.body.D165.lamelaAlu.pret,
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
        ghidajAlu: {
          pret: req.body.D165.ghidajAlu.pret,
        },
        perieGhidaj: {
          pret: req.body.D165.perieGhidaj.pret,
        },
        agatatorCovor170: {
          pret: req.body.D165.agatatorCovor170.pret,
        },
        inel40: {
          pret: req.body.D165.inel40.pret,
        },
        capacLateral: {
          pret: req.body.D165.capacLateral.pret,
        },
        fulie165: {
          pret: req.body.D165.fulie165.pret,
        },
        dop: {
          pret: req.body.D165.dop.pret,
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
        arcCilindru: {
          pret: req.body.D165.arcCilindru.pret,
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
        lamelaAlu: {
          pret: req.body.D180.lamelaAlu.pret,
        },
        lamelaTerminala: {
          pret: req.body.D180.lamelaTerminala.pret,
        },
        garnituraDeContact: {
          pret: req.body.D180.garnituraDeContact.pret,
        },
        axOctogonal60: {
          pret: req.body.D180.axOctogonal60.pret,
        },
        ghidajAlu: {
          pret: req.body.D180.ghidajAlu.pret,
        },
        perieGhidaj: {
          pret: req.body.D180.perieGhidaj.pret,
        },
        agatatorCovor170: {
          pret: req.body.D180.agatatorCovor170.pret,
        },
        inel60: {
          pret: req.body.D180.inel60.pret,
        },
        capacLateral: {
          pret: req.body.D180.capacLateral.pret,
        },
        fulie180: {
          pret: req.body.D180.fulie180.pret,
        },
        dop60: {
          pret: req.body.D180.dop60.pret,
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
        arcCilindru: {
          pret: req.body.D180.arcCilindru.pret,
        },
        arriter: {
          pret: req.body.D180.arriter.pret,
        },
        reductie: {
          pret: req.body.D180.reductie.pret,
        },
      },
      D205: {
        aluFata: {
          pret: req.body.D205.aluFata.pret,
        },
        aluSpate: {
          pret: req.body.D205.aluSpate.pret,
        },
        lamelaAlu: {
          pret: req.body.D205.lamelaAlu.pret,
        },
        lamelaTerminala: {
          pret: req.body.D205.lamelaTerminala.pret,
        },
        garnituraDeContact: {
          pret: req.body.D205.garnituraDeContact.pret,
        },
        axOctogonal60: {
          pret: req.body.D205.axOctogonal60.pret,
        },
        ghidajAlu: {
          pret: req.body.D205.ghidajAlu.pret,
        },
        perieGhidaj: {
          pret: req.body.D205.perieGhidaj.pret,
        },
        agatatorCovor170: {
          pret: req.body.D205.agatatorCovor170.pret,
        },
        inel60: {
          pret: req.body.D205.inel60.pret,
        },
        capacLateral: {
          pret: req.body.D205.capacLateral.pret,
        },
        fulie180: {
          pret: req.body.D205.fulie180.pret,
        },
        dop60: {
          pret: req.body.D205.dop60.pret,
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
        arcCilindru: {
          pret: req.body.D205.arcCilindru.pret,
        },
        arriter: {
          pret: req.body.D205.arriter.pret,
        },
        reductie: {
          pret: req.body.D205.reductie.pret,
        },
      },
    });
    const produs = await newProdus.save();
    res.send({ message: 'Produsul a fost adăugat', produs });
  })
);

produsRouter.get('/:id', async (req, res) => {
  const produs = await Produs.findById(req.params.id);
  if (produs) {
    res.send(produs);
  } else {
    res.status(404).send({ message: 'Produsul nu a fost gasit' });
  }
});

produsRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const produs = await Produs.findById(req.params.id);
    if (produs) {
      await produs.remove();
      res.send({ message: 'Produs sters' });
    } else {
      res.status(404).send({ message: 'Produsul nu a fost gasit' });
    }
  })
);

export default produsRouter;
