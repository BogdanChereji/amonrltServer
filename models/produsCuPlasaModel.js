import mongoose from 'mongoose';

const produsCuPlasaSchema = new mongoose.Schema(
  {
    Nume: { type: String },
    NumeCuloare: { type: String },
    D165: {
      aluFata: {
        pret: { type: Number },
      },
      aluSpate: {
        pret: { type: Number },
      },
      lamelaAluminiu: {
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
      ghidajAluKombi: {
        pret: { type: Number },
      },
      profilMobilPlasa: {
        pret: { type: Number },
      },
      profilFixPlasa: {
        pret: { type: Number },
      },
      perieGhidajPlasa: {
        pret: { type: Number },
      },
      plasaPeAx: {
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
      fulie: {
        pret: { type: Number },
      },
      dop: {
        pret: { type: Number },
      },
      kitPlasa: {
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
      arcCilindric: {
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
      lamelaAluminiu: {
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
      ghidajAluKombi: {
        pret: { type: Number },
      },
      profilMobilPlasa: {
        pret: { type: Number },
      },
      profilFixPlasa: {
        pret: { type: Number },
      },
      perieGhidajPlasa: {
        pret: { type: Number },
      },
      plasaPeAx: {
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
      fulie: {
        pret: { type: Number },
      },
      dop: {
        pret: { type: Number },
      },
      kitPlasa: {
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
      arcCilindric: {
        pret: { type: Number },
      },
      arriter: {
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
      lamelaAluminiu: {
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
      ghidajAluKombi: {
        pret: { type: Number },
      },
      profilMobilPlasa: {
        pret: { type: Number },
      },
      profilFixPlasa: {
        pret: { type: Number },
      },
      perieGhidajPlasa: {
        pret: { type: Number },
      },
      plasaPeAx: {
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
      fulie: {
        pret: { type: Number },
      },
      dop: {
        pret: { type: Number },
      },
      kitPlasa: {
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
      arcCilindric: {
        pret: { type: Number },
      },
      arriter: {
        pret: { type: Number },
      },
    },
  },
  {
    timestamps: true,
  }
);
const ProdusCuPlasa = mongoose.model('ProdusCuPlasa', produsCuPlasaSchema);
export default ProdusCuPlasa;
