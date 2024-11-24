import mongoose from 'mongoose';

const produsUsaCuPerieSchema = new mongoose.Schema(
  {
    Nume: { type: String },
    NumeCuloare: { type: String },
    Pret: { type: Number },
  },
  {
    timestamps: true,
  }
);
const ProdusUsaCuPerie = mongoose.model(
  'ProdusUsaCuPerie',
  produsUsaCuPerieSchema
);
export default ProdusUsaCuPerie;
