import mongoose from 'mongoose';

const produsPlasaTipRulouSchema = new mongoose.Schema(
  {
    Nume: { type: String },
    NumeCuloare: { type: String },
    Pret: { type: Number },
  },
  {
    timestamps: true,
  }
);
const ProdusPlasaTipRulou = mongoose.model(
  'ProdusPlasaTipRulou',
  produsPlasaTipRulouSchema
);
export default ProdusPlasaTipRulou;
