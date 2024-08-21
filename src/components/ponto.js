import React, { useState, useEffect } from 'react';
import { marcarEntrada, marcarSaida } from '../services/pontoService';

const Ponto = () => {
  const [horaAtual, setHoraAtual] = useState(new Date());
  const [status, setStatus] = useState('');
  const funcionarioId = '12345'; // Exemplo estático, pode ser dinâmico

  useEffect(() => {
    const timer = setInterval(() => setHoraAtual(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMarcarEntrada = async () => {
    try {
      const response = await marcarEntrada(funcionarioId);
      setStatus(`Entrada marcada às: ${response.data.entrada}`);
    } catch (error) {
      setStatus('Erro ao marcar entrada');
    }
  };

  const handleMarcarSaida = async () => {
    try {
      const response = await marcarSaida(funcionarioId);
      setStatus(`Saída marcada às: ${response.data.saida}`);
    } catch (error) {
      setStatus('Erro ao marcar saída');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Marcação de Ponto</h1>
      <h2>{horaAtual.toLocaleTimeString()}</h2>
      <button onClick={handleMarcarEntrada} style={{ marginRight: '10px' }}>
        Marcar Entrada
      </button>
      <button onClick={handleMarcarSaida}>Marcar Saída</button>
      <p>{status}</p>
    </div>
  );
};

export default Ponto;
