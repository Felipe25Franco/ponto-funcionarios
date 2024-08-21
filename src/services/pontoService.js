import axios from 'axios';

const API_URL = 'http://localhost:5000/api/ponto';  // URL da API

export const marcarEntrada = async (funcionarioId) => {
  return axios.post(`${API_URL}/check-in`, { funcionarioId });
};

export const marcarSaida = async (funcionarioId) => {
  return axios.post(`${API_URL}/check-out`, { funcionarioId });
};

export const obterHistorico = async (funcionarioId) => {
  return axios.get(`${API_URL}/history/${funcionarioId}`);
};
