import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Cart from '../models/cartModel.js';
import { isAuth, isAdmin } from '../utils.js';
import Oferta from '../models/ofertaModel.js'; // Presupunând că ai un model pentru colecția "Offer"
const cartRouter = express.Router();

// Apeleaza toate elementele din cart
cartRouter.get('/', async (req, res) => {
  const carts = await Cart.find();
  res.send(carts);
});

// Creaza cart-ul
cartRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const newCart = new Cart({
      produs: req.body.produs,
      culoare: req.body.culoare,
      latime: req.body.latime,
      inaltime: req.body.inaltime,
      balcon: req.body.balcon,
      actionareInterior: req.body.actionareInterior,
      bandaSnur: req.body.bandaSnur,
      mentiuni: req.body.mentiuni,
      tipMotor: req.body.tipMotor,
      actionareMotor: req.body.actionareMotor,
      pret: req.body.pret,
      adaos: req.body.adaos,
      distantier: req.body.distantier,
      user: req.body.user || req.user._id,
    });
    const cart = await newCart.save();
    res.status(201).send({ message: 'Produsul adaugat in cos', cart });
  })
);

// Apeleaza elementele din cart introduse de un singur id
cartRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const cart = await Cart.find({ user: req.user._id });
    res.send(cart);
  })
);

//Preia oferta direct din cart
cartRouter.post(
  '/combinaproduse',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {
      const productIds = req.body.productIds;
      const products = await Cart.find({ _id: { $in: productIds } });

      // Adaugă informațiile despre produse în "Oferta"
      const newOferta = new Oferta({
        products: products.map((product) => ({
          productDetails: product._id,
          produs: product.produs,
          culoare: product.culoare,
          latime: product.latime,
          inaltime: product.inaltime,
          balcon: product.balcon,
          actionareInterior: product.actionareInterior,
          bandaSnur: product.bandaSnur,
          mentiuni: product.mentiuni,
          tipMotor: product.tipMotor,
          actionareMotor: product.actionareMotor,
          pret: product.pret,
          distantier: product.distantier,

          // Alte detalii despre produs, dacă există
        })),
        pret: req.body.pret, // Dacă vrei să adaugi și pretul total în oferta
        user: req.body.user || req.user._id,
        adaos: req.body.adaos,
        username: req.body.username,
        client: req.body.client,
        adresa: req.body.adresa,
      });

      await newOferta.save();
      res.json({ success: true, message: 'Ofertă creată cu succes' });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ success: false, message: 'Eroare internă a serverului' });
    }
  })
);

// sterge un element din cart
cartRouter.delete(
  '/:id',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const cart = await Cart.findById(req.params.id);
    if (cart) {
      await cart.remove();
      res.send({ message: 'Produs sters' });
    } else {
      res.status(404).send({ message: 'Produsul nu a fost gasit' });
    }
  })
);

// Sterge toate produsele din colectie
cartRouter.delete(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const deletedCart = await Cart.deleteMany({ user: req.user._id });
    if (deletedCart) {
      res.send({ message: 'Toate produsele au fost șterse din coș' });
    } else {
      res
        .status(404)
        .send({ message: 'Probleme la ștergerea produselor din coș' });
    }
  })
);
export default cartRouter;
