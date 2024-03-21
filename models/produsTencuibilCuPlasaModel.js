import mongoose from 'mongoose';

const produsTencuibilCuPlasaSchema = new mongoose.Schema(
  {
    Nume: { type: String },
    NumeCuloare: { type: String },
    D165: {
      TocTenc165pe20: {
        pret: { type: Number },
      },
      SinaDeTencuire20: {
        pret: { type: Number },
      },
      LamelaAluminiu: {
        pret: { type: Number },
      },
      LamelaTerminala: {
        pret: { type: Number },
      },
      PanelServIz165pe20: {
        pret: { type: Number },
      },
      AxOctogonal40: {
        pret: { type: Number },
      },
      GhidajAluKombi: {
        pret: { type: Number },
      },
      ProfilMobilPlasa: {
        pret: { type: Number },
      },
      ProfilFixPlasa: {
        pret: { type: Number },
      },
      PerieGhidajPlasa: {
        pret: { type: Number },
      },
      PlasaPeAx: {
        pret: { type: Number },
      },
      PerieGhidaj: {
        pret: { type: Number },
      },
      AgatatorCovor130: {
        pret: { type: Number },
      },
      Inel40: {
        pret: { type: Number },
      },
      CapacLateral: {
        pret: { type: Number },
      },
      Fulie: {
        pret: { type: Number },
      },
      Dop: {
        pret: { type: Number },
      },
      KitPlasa: {
        pret: { type: Number },
      },
      Rulment: {
        pret: { type: Number },
      },
      Snur: {
        pret: { type: Number },
      },
      Automat: {
        pret: { type: Number },
      },
      OpritorAscuns: {
        pret: { type: Number },
      },
      PalnieGhidaj: {
        pret: { type: Number },
      },
      OrnamentPlastic: {
        pret: { type: Number },
      },
      RolaPlasticCuCilindru: {
        pret: { type: Number },
      },
      ArcCilindric: {
        pret: { type: Number },
      },
      Arriter: {
        pret: { type: Number },
      },
    },
    D180: {
      TocTenc180pe20: {
        pret: { type: Number },
      },
      SinaDeTencuire20: {
        pret: { type: Number },
      },
      LamelaAluminiu: {
        pret: { type: Number },
      },
      LamelaTerminala: {
        pret: { type: Number },
      },
      PanelServIz180pe20: {
        pret: { type: Number },
      },
      AxOctogonal40: {
        pret: { type: Number },
      },
      GhidajAluKombi: {
        pret: { type: Number },
      },
      ProfilMobilPlasa: {
        pret: { type: Number },
      },
      ProfilFixPlasa: {
        pret: { type: Number },
      },
      PerieGhidajPlasa: {
        pret: { type: Number },
      },
      PlasaPeAx: {
        pret: { type: Number },
      },
      PerieGhidaj: {
        pret: { type: Number },
      },

      AgatatorCovor130: {
        pret: { type: Number },
      },
      Inel40: {
        pret: { type: Number },
      },
      CapacLateral: {
        pret: { type: Number },
      },
      Fulie: {
        pret: { type: Number },
      },
      Dop: {
        pret: { type: Number },
      },
      KitPlasa: {
        pret: { type: Number },
      },
      Rulment: {
        pret: { type: Number },
      },
      Snur: {
        pret: { type: Number },
      },
      Automat: {
        pret: { type: Number },
      },
      OpritorAscuns: {
        pret: { type: Number },
      },
      PalnieGhidaj: {
        pret: { type: Number },
      },
      OrnamentPlastic: {
        pret: { type: Number },
      },
      RolaPlasticCuCilindru: {
        pret: { type: Number },
      },
      ArcCilindric: {
        pret: { type: Number },
      },
      Arriter: {
        pret: { type: Number },
      },
    },
    D205: {
      TocTenc205pe20: {
        pret: { type: Number },
      },
      SinaDeTencuire20: {
        pret: { type: Number },
      },
      LamelaAluminiu: {
        pret: { type: Number },
      },
      LamelaTerminala: {
        pret: { type: Number },
      },
      PanelServIz205pe20: {
        pret: { type: Number },
      },
      AxOctogonal40: {
        pret: { type: Number },
      },
      GhidajAluKombi: {
        pret: { type: Number },
      },
      ProfilMobilPlasa: {
        pret: { type: Number },
      },
      ProfilFixPlasa: {
        pret: { type: Number },
      },
      PerieGhidajPlasa: {
        pret: { type: Number },
      },
      PlasaPeAx: {
        pret: { type: Number },
      },
      PerieGhidaj: {
        pret: { type: Number },
      },

      AgatatorCovor130: {
        pret: { type: Number },
      },
      Inel40: {
        pret: { type: Number },
      },
      CapacLateral: {
        pret: { type: Number },
      },
      Fulie: {
        pret: { type: Number },
      },
      Dop: {
        pret: { type: Number },
      },
      KitPlasa: {
        pret: { type: Number },
      },
      Rulment: {
        pret: { type: Number },
      },
      Snur: {
        pret: { type: Number },
      },
      Automat: {
        pret: { type: Number },
      },
      OpritorAscuns: {
        pret: { type: Number },
      },
      PalnieGhidaj: {
        pret: { type: Number },
      },
      OrnamentPlastic: {
        pret: { type: Number },
      },
      RolaPlasticCuCilindru: {
        pret: { type: Number },
      },
      ArcCilindric: {
        pret: { type: Number },
      },
      Arriter: {
        pret: { type: Number },
      },
    },
  },
  {
    timestamps: true,
  }
);
const ProdusTencuibilCuPlasa = mongoose.model(
  'ProdusTencuibilCuPlasa',
  produsTencuibilCuPlasaSchema
);
export default ProdusTencuibilCuPlasa;
