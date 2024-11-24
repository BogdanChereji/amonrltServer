import mongoose from 'mongoose';

const produsPlasaInGol31x11Schema = new mongoose.Schema(
  {
    Nume: { type: String },
    NumeCuloare: { type: String },
    Pret: { type: Number },
  },
  {
    timestamps: true,
  }
);
const ProdusPlasaInGol31x11 = mongoose.model(
  'ProdusPlasaInGol31x11',
  produsPlasaInGol31x11Schema
);
export default ProdusPlasaInGol31x11;
