import { BASE_URL } from '../constants/api'
import axios from 'axios';
import Cookies from 'js-cookie';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});


apiClient.interceptors.request.use(
  (config) => {
    const csrfToken = Cookies.get('XSRF-TOKEN');
    if (
      csrfToken &&
      ['post', 'put', 'delete', 'patch'].includes(config.method || '')
    ) {
      config.headers['X-CSRF-Token'] = csrfToken;
    }
    return config;
  },
  (error) => {
    return `Error getting token ${error}`;
  },
);

export default apiClient;