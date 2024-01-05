import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema(
  {
    produs: { type: String },
    culoare: { type: String },
    latime: { type: Number },
    inaltime: { type: Number },
    balcon: { type: Boolean, default: false },
    actionareInterior: { type: String },
    bandaSnur: { type: String },
    mentiuni: { type: String },
    tipMotor: { type: String },
    actionareMotor: { type: String },
    pret: { type: Number },
    adaos: { type: Number },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.model('Cart', cartSchema);
export default Cart;
