import mongoose from 'mongoose';

const produsSuprapusCuPlasaSchema = new mongoose.Schema(
  {
    Nume: { type: String },
    NumeCuloare: { type: String },
    D195: {
      SetCasetaSuprapus195: {
        pret: { type: Number },
      },
      Izolatie195: {
        pret: { type: Number },
      },
      ProfilAdaptor: {
        pret: { type: Number },
      },
      AxOctogonal40: {
        pret: { type: Number },
      },
      LamelaAluminiu: {
        pret: { type: Number },
      },
      LamelaTerminala: {
        pret: { type: Number },
      },
      FixMobilPlasaPeAx: {
        pret: { type: Number },
      },
      GhidajPVC: {
        pret: { type: Number },
      },
      PerieGhidaj: {
        pret: { type: Number },
      },
      Inel40: {
        pret: { type: Number },
      },
      SetAccesorii195: {
        pret: { type: Number },
      },
      Banda: {
        pret: { type: Number },
      },
      Automat: {
        pret: { type: Number },
      },
      OpritorPVC: {
        pret: { type: Number },
      },
      Arriter: {
        pret: { type: Number },
      },
      SuplimentareAccesorii: {
        pret: { type: Number },
      },
    },
    D245: {
      SetCasetaSuprapus195: {
        pret: { type: Number },
      },
      Izolatie195: {
        pret: { type: Number },
      },
      ProfilAdaptor: {
        pret: { type: Number },
      },
      AxOctogonal40: {
        pret: { type: Number },
      },
      LamelaAluminiu: {
        pret: { type: Number },
      },
      LamelaTerminala: {
        pret: { type: Number },
      },
      FixMobilPlasaPeAx: {
        pret: { type: Number },
      },
      GhidajPVC: {
        pret: { type: Number },
      },
      PerieGhidaj: {
        pret: { type: Number },
      },
      Inel40: {
        pret: { type: Number },
      },
      SetAccesorii195: {
        pret: { type: Number },
      },
      Banda: {
        pret: { type: Number },
      },
      Automat: {
        pret: { type: Number },
      },
      OpritorPVC: {
        pret: { type: Number },
      },
      Arriter: {
        pret: { type: Number },
      },
      SuplimentareAccesorii: {
        pret: { type: Number },
      },
    },
    D195S: {
      SetCasetaSuprapus195: {
        pret: { type: Number },
      },
      Izolatie195: {
        pret: { type: Number },
      },
      ProfilAdaptor: {
        pret: { type: Number },
      },
      AxOctogonal40: {
        pret: { type: Number },
      },
      LamelaAluminiu: {
        pret: { type: Number },
      },
      LamelaTerminala: {
        pret: { type: Number },
      },
      GarnituraDeContact: {
        pret: { type: Number },
      },
      GhidajPVC: {
        pret: { type: Number },
      },
      PerieGhidaj: {
        pret: { type: Number },
      },
      Inel40: {
        pret: { type: Number },
      },
      SetAccesorii195: {
        pret: { type: Number },
      },
      Banda: {
        pret: { type: Number },
      },
      Automat: {
        pret: { type: Number },
      },
      OpritorPVC: {
        pret: { type: Number },
      },
      Arriter: {
        pret: { type: Number },
      },
      SuplimentareAccesorii: {
        pret: { type: Number },
      },
    },
    D245S: {
      SetCasetaSuprapus195: {
        pret: { type: Number },
      },
      Izolatie195: {
        pret: { type: Number },
      },
      ProfilAdaptor: {
        pret: { type: Number },
      },
      AxOctogonal40: {
        pret: { type: Number },
      },
      LamelaAluminiu: {
        pret: { type: Number },
      },
      LamelaTerminala: {
        pret: { type: Number },
      },
      FixMobilPlasaPeAx: {
        pret: { type: Number },
      },
      GhidajPVC: {
        pret: { type: Number },
      },
      PerieGhidaj: {
        pret: { type: Number },
      },
      Inel40: {
        pret: { type: Number },
      },
      SetAccesorii195: {
        pret: { type: Number },
      },
      Banda: {
        pret: { type: Number },
      },
      Automat: {
        pret: { type: Number },
      },
      OpritorPVC: {
        pret: { type: Number },
      },
      Arriter: {
        pret: { type: Number },
      },
      SuplimentareAccesorii: {
        pret: { type: Number },
      },
    },
  },
  {
    timestamps: true,
  }
);
const ProdusSuprapusCuPlasa = mongoose.model(
  'ProdusSuprapusCuPlasa',
  produsSuprapusCuPlasaSchema
);
export default ProdusSuprapusCuPlasa;
