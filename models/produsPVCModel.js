import mongoose from 'mongoose';

const produsPVCSchema = new mongoose.Schema(
  {
    Nume: { type: String },
    NumeCuloare: { type: String },
    Pret: { type: Number },
  },
  {
    timestamps: true,
  }
);
const ProdusPVC = mongoose.model('ProdusPVC', produsPVCSchema);
export default ProdusPVC;
