import mongoose from 'mongoose';

const ofertaSchema = new mongoose.Schema(
  {
    products: [
      {
        productDetails: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Cart',
        },
        produs: { type: String }, // Adaugă câmpuri suplimentare aici
        culoare: { type: String }, // Adaugă câmpuri suplimentare aici
        latime: { type: Number },
        inaltime: { type: Number },
        balcon: { type: Boolean },
        actionareInterior: { type: String },
        bandaSnur: { type: String },
        mentiuni: { type: String },
        tipMotor: { type: String },
        distantier: { type: Boolean },
        actionareMotor: { type: String },
        pret: { type: Number },
        // Alte câmpuri ale produsului, dacă există
      },
    ],
    client: { type: String },
    adresa: { type: String },
    pret: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    username: { type: String },
  },
  {
    timestamps: true,
  }
);

const Oferta = mongoose.model('Oferta', ofertaSchema);
export default Oferta;
