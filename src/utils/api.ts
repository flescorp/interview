import axios from 'axios';
import { getCookie } from 'cookies-next';

const ACCESS_TOKEN = 'access_token';
const baseURL = process.env.APP_API_URL;
const token = getCookie(ACCESS_TOKEN) || null;

const instance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export { instance, ACCESS_TOKEN, token };
