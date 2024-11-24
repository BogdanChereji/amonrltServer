import mongoose from 'mongoose';

const produsPlasaCuBalamale17x25Schema = new mongoose.Schema(
  {
    Nume: { type: String },
    NumeCuloare: { type: String },
    Pret: { type: Number },
  },
  {
    timestamps: true,
  }
);
const ProdusPlasaCuBalamale17x25 = mongoose.model(
  'ProdusPlasaCuBalamale17x25',
  produsPlasaCuBalamale17x25Schema
);
export default ProdusPlasaCuBalamale17x25;
