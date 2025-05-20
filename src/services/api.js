import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.68:8080', // ex: http://192.168.0.100:8080
});

export default api;
