import axios from 'axios';

export const baseAxios = axios.create({
  baseURL: 'https://auth-backend-dz2k.onrender.com'
});