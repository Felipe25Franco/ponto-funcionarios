const mongoose = require('mongoose');

const pontoSchema = new mongoose.Schema({
  funcionarioId: { type: String, required: true },
  entrada: { type: Date, required: true },
  saida: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Ponto', pontoSchema);
