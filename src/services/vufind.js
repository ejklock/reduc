import axios from 'axios';

const api = axios.create({
  baseURL: 'http://oasisbr.ibict.br/vufind/api/v1',
});

export default api;
