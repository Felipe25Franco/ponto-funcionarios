const express = require('express');
const { marcarEntrada, marcarSaida, obterHistorico } = require('../controllers/pontoController');
const router = express.Router();

router.post('/check-in', marcarEntrada);
router.post('/check-out', marcarSaida);
router.get('/history/:funcionarioId', obterHistorico);

module.exports = router;
