import api from './api';

export async function createUser(userData) {
  try {
    const response = await api.post('/usuario', userData);
    return response;
  } catch (error) {
    console.error('Erro ao criar usuário:', error.response || error.message);
    throw error;
  }
}

export async function loginUser(email, senha) {
  const response = await api.post('/usuario/login', { email, senha });
  return response.data;
}

