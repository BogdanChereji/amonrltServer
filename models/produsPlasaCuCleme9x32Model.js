import mongoose from 'mongoose';

const produsPlasaCuCleme9x32Schema = new mongoose.Schema(
  {
    Nume: { type: String },
    NumeCuloare: { type: String },
    Pret: { type: Number },
  },
  {
    timestamps: true,
  }
);
const ProdusPlasaCuCleme9x32 = mongoose.model(
  'ProdusPlasaCuCleme9x32',
  produsPlasaCuCleme9x32Schema
);
export default ProdusPlasaCuCleme9x32;
