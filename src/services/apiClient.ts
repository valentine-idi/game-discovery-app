import axios, {CanceledError} from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  headers: {
    'Content-Type': 'application/json',
  },
  params: { key: import.meta.env.VITE_RAWG_API_KEY },
});

export { CanceledError };

export default apiClient;