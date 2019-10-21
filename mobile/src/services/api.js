import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.2.217:3333',
});

export default api;

//meu not 192.168.2.217
