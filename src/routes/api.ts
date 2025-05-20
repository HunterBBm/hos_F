import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // URL ของ Lumen backend
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;