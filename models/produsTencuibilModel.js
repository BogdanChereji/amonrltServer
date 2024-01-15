import mongoose from 'mongoose';

const produsTencuibilSchema = new mongoose.Schema(
  {
    Nume: { type: String },
    NumeCuloare: { type: String },
    D165: {
      TocRulouTencuibil165pe20: {
        pret: { type: Number },
      },
      SinaTencuibilaPanelService: {
        pret: { type: Number },
      },
      PanelService165pe20: {
        pret: { type: Number },
      },
      PolistirenExtrudat: {
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
      GhidajAlu: {
        pret: { type: Number },
      },
      PerieGhidaj: {
        pret: { type: Number },
      },
      AgatatorCovor170: {
        pret: { type: Number },
      },
      Inel40: {
        pret: { type: Number },
      },
      CapacLateral165pe20: {
        pret: { type: Number },
      },
      Fulie165: {
        pret: { type: Number },
      },
      Dop40: {
        pret: { type: Number },
      },
      Rulment: {
        pret: { type: Number },
      },
      Snur: {
        pret: { type: Number },
      },
      PalnieGhidaj: {
        pret: { type: Number },
      },
      OrnamentPlastic: {
        pret: { type: Number },
      },
      RolaPlastic: {
        pret: { type: Number },
      },
      ArcCilindric: {
        pret: { type: Number },
      },
      Automat: {
        pret: { type: Number },
      },
      OpritorAscuns: {
        pret: { type: Number },
      },
      Arriter: {
        pret: { type: Number },
      },
    },
    D180: {
      TocRulouTencuibil165pe20: {
        pret: { type: Number },
      },
      SinaTencuibilaPanelService: {
        pret: { type: Number },
      },
      PanelService165pe20: {
        pret: { type: Number },
      },
      PolistirenExtrudat: {
        pret: { type: Number },
      },
      AxOctogonal60: {
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
      GhidajAlu: {
        pret: { type: Number },
      },
      PerieGhidaj: {
        pret: { type: Number },
      },
      AgatatorCovor170: {
        pret: { type: Number },
      },
      Inel60: {
        pret: { type: Number },
      },
      CapacLateral165pe20: {
        pret: { type: Number },
      },
      Fulie165: {
        pret: { type: Number },
      },
      Dop60: {
        pret: { type: Number },
      },
      Rulment: {
        pret: { type: Number },
      },
      Snur: {
        pret: { type: Number },
      },
      PalnieGhidaj: {
        pret: { type: Number },
      },
      OrnamentPlastic: {
        pret: { type: Number },
      },
      RolaPlastic: {
        pret: { type: Number },
      },
      ArcCilindric: {
        pret: { type: Number },
      },
      Automat: {
        pret: { type: Number },
      },
      OpritorAscuns: {
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
const ProdusTencuibil = mongoose.model(
  'ProdusTencuibil',
  produsTencuibilSchema
);
export default ProdusTencuibil;
