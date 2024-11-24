import mongoose from 'mongoose';

const produsUsaMagneticaSchema = new mongoose.Schema(
  {
    Nume: { type: String },
    NumeCuloare: { type: String },
    Pret: { type: Number },
  },
  {
    timestamps: true,
  }
);
const ProdusUsaMagnetica = mongoose.model(
  'ProdusUsaMagnetica',
  produsUsaMagneticaSchema
);
export default ProdusUsaMagnetica;
