import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/provider';

export const fetchAllProviders = async () => {
  try {
    const response = await axios.get(BASE_URL);
    if (response && response.data) {
      return response.data;
    } else {
      throw new Error('No data received from the server');
    }
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const deleteProvider = async (providerId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${providerId}`);
    if (response && response.data) {
      return response.data;
    } else {
      throw new Error('No data received from the server');
    }
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const updateProvider = async (provider) => {
  try {
    const response = await axios.patch(`${BASE_URL}/${provider._id}`, provider);
    if (response && response.data) {
      return response.data;
    } else {
      throw new Error('No data received from the server');
    }
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};
