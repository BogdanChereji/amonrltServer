import mongoose from 'mongoose';

const produsSchema = new mongoose.Schema(
  {
    Nume: { type: String },
    NumeCuloare: { type: String },
    D137: {
      aluFata: {
        pret: { type: Number },
      },
      aluSpate: {
        pret: { type: Number },
      },
      lamelaAlu: {
        pret: { type: Number },
      },
      lamelaTerminala: {
        pret: { type: Number },
      },
      garnituraDeContact: {
        pret: { type: Number },
      },
      axOctogonal40: {
        pret: { type: Number },
      },
      ghidajAlu: {
        pret: { type: Number },
      },
      perieGhidaj: {
        pret: { type: Number },
      },
      agatatorCovor130: {
        pret: { type: Number },
      },
      inel40: {
        pret: { type: Number },
      },
      capacLateral: {
        pret: { type: Number },
      },
      fulie120: {
        pret: { type: Number },
      },
      dop: {
        pret: { type: Number },
      },
      rulment: {
        pret: { type: Number },
      },
      snur: {
        pret: { type: Number },
      },
      automat: {
        pret: { type: Number },
      },
      opritorAscuns: {
        pret: { type: Number },
      },
      palnieGhidaj: {
        pret: { type: Number },
      },
      ornamentPlastic: {
        pret: { type: Number },
      },
      rolaPlasticCuCilindru: {
        pret: { type: Number },
      },
      arcCilindru: {
        pret: { type: Number },
      },
      arriter: {
        pret: { type: Number },
      },
    },
    D165: {
      aluFata: {
        pret: { type: Number },
      },
      aluSpate: {
        pret: { type: Number },
      },
      lamelaAlu: {
        pret: { type: Number },
      },
      lamelaTerminala: {
        pret: { type: Number },
      },
      garnituraDeContact: {
        pret: { type: Number },
      },
      axOctogonal40: {
        pret: { type: Number },
      },
      ghidajAlu: {
        pret: { type: Number },
      },
      perieGhidaj: {
        pret: { type: Number },
      },
      agatatorCovor170: {
        pret: { type: Number },
      },
      inel40: {
        pret: { type: Number },
      },
      capacLateral: {
        pret: { type: Number },
      },
      fulie165: {
        pret: { type: Number },
      },
      dop: {
        pret: { type: Number },
      },
      rulment: {
        pret: { type: Number },
      },
      snur: {
        pret: { type: Number },
      },
      automat: {
        pret: { type: Number },
      },
      opritorAscuns: {
        pret: { type: Number },
      },
      palnieGhidaj: {
        pret: { type: Number },
      },
      ornamentPlastic: {
        pret: { type: Number },
      },
      rolaPlasticCuCilindru: {
        pret: { type: Number },
      },
      arcCilindru: {
        pret: { type: Number },
      },
      arriter: {
        pret: { type: Number },
      },
    },
    D180: {
      aluFata: {
        pret: { type: Number },
      },
      aluSpate: {
        pret: { type: Number },
      },
      lamelaAlu: {
        pret: { type: Number },
      },
      lamelaTerminala: {
        pret: { type: Number },
      },
      garnituraDeContact: {
        pret: { type: Number },
      },
      axOctogonal60: {
        pret: { type: Number },
      },
      ghidajAlu: {
        pret: { type: Number },
      },
      perieGhidaj: {
        pret: { type: Number },
      },
      agatatorCovor170: {
        pret: { type: Number },
      },
      inel60: {
        pret: { type: Number },
      },
      capacLateral: {
        pret: { type: Number },
      },
      fulie180: {
        pret: { type: Number },
      },
      dop60: {
        pret: { type: Number },
      },
      rulment: {
        pret: { type: Number },
      },
      snur: {
        pret: { type: Number },
      },
      automat: {
        pret: { type: Number },
      },
      opritorAscuns: {
        pret: { type: Number },
      },
      palnieGhidaj: {
        pret: { type: Number },
      },
      ornamentPlastic: {
        pret: { type: Number },
      },
      rolaPlasticCuCilindru: {
        pret: { type: Number },
      },
      arcCilindru: {
        pret: { type: Number },
      },
      arriter: {
        pret: { type: Number },
      },
      reductie: {
        pret: { type: Number },
      },
    },
    D205: {
      aluFata: {
        pret: { type: Number },
      },
      aluSpate: {
        pret: { type: Number },
      },
      lamelaAlu: {
        pret: { type: Number },
      },
      lamelaTerminala: {
        pret: { type: Number },
      },
      garnituraDeContact: {
        pret: { type: Number },
      },
      axOctogonal60: {
        pret: { type: Number },
      },
      ghidajAlu: {
        pret: { type: Number },
      },
      perieGhidaj: {
        pret: { type: Number },
      },
      agatatorCovor170: {
        pret: { type: Number },
      },
      inel60: {
        pret: { type: Number },
      },
      capacLateral: {
        pret: { type: Number },
      },
      fulie180: {
        pret: { type: Number },
      },
      dop60: {
        pret: { type: Number },
      },
      rulment: {
        pret: { type: Number },
      },
      snur: {
        pret: { type: Number },
      },
      automat: {
        pret: { type: Number },
      },
      opritorAscuns: {
        pret: { type: Number },
      },
      palnieGhidaj: {
        pret: { type: Number },
      },
      ornamentPlastic: {
        pret: { type: Number },
      },
      rolaPlasticCuCilindru: {
        pret: { type: Number },
      },
      arcCilindru: {
        pret: { type: Number },
      },
      arriter: {
        pret: { type: Number },
      },
      reductie: {
        pret: { type: Number },
      },
    },
  },
  {
    timestamps: true,
  }
);
const Produs = mongoose.model('Produs', produsSchema);
export default Produs;
