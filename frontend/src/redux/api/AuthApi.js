import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/auth';

export const loginApi = async (credentials) => {
  return axios.post(`${BASE_URL}/login`, credentials);
};

export const logoutApi = async () => {
  return axios.post(`${BASE_URL}/logout`);
};

export const registerApi = async (userInfo) => {
  return axios.post(`${BASE_URL}/register`, userInfo);
};
