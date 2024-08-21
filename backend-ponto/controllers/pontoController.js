const Ponto = require('../models/ponto');

// Marcar entrada
exports.marcarEntrada = async (req, res) => {
  try {
    const { funcionarioId } = req.body;
    const novoPonto = new Ponto({ funcionarioId, entrada: new Date() });
    await novoPonto.save();
    res.status(201).json(novoPonto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao marcar entrada', error });
  }
};

// Marcar saída
exports.marcarSaida = async (req, res) => {
  try {
    const { funcionarioId } = req.body;
    const ponto = await Ponto.findOne({ funcionarioId }).sort({ entrada: -1 });
    if (!ponto) return res.status(404).json({ message: 'Entrada não encontrada' });

    ponto.saida = new Date();
    await ponto.save();
    res.status(200).json(ponto);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao marcar saída', error });
  }
};

// Histórico de marcações
exports.obterHistorico = async (req, res) => {
  try {
    const { funcionarioId } = req.params;
    const historico = await Ponto.find({ funcionarioId });
    res.status(200).json(historico);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao obter histórico', error });
  }
};
