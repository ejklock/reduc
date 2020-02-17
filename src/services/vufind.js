import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.10.10.107/reduc/api/v1/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
});

export default api;
