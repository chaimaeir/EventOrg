import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/customer';

export const fetchAllCustomers = async () => {
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

export const deleteCustomer = async (customerId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${customerId}`);
    if (response && response.data) {
      return response.data;
    } else {
      throw new Error('No data received from the server');
    }
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};

export const updateCustomer = async (customer) => {
  try {
    const response = await axios.patch(`${BASE_URL}/${customer._id}`, customer);
    if (response && response.data) {
      return response.data;
    } else {
      throw new Error('No data received from the server');
    }
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};
