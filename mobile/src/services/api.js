import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.132:3333',
});

export default api;

//meu not 192.168.2.217
//mp 10.114.66.54
// ssd 192.168.1.132
