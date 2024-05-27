import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../../Constants/Config';

export const registerProvider = createAsyncThunk(
  'auth/registerProvider',
  async (providerData, { rejectWithValue }) => {
    try {
    console.log(providerData)
      const response = await axios.post(`${BASE_URL}auth/provider/register`, providerData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginProvider = createAsyncThunk(
  'auth/loginProvider',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      console.log(" welcome to ur dashboard")
      const response = await axios.post(`${BASE_URL}auth/provider/login`, { email, password });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const registerCustomer = createAsyncThunk(
  'auth/registerCustomer',
  async (customerData, { rejectWithValue }) => {
    try {
      console.log(customerData);
      const response = await axios.post(`${BASE_URL}auth/customer/register`, customerData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const loginCustomer = createAsyncThunk(
  'auth/loginCustomer',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      console.log("Welcome to your customer dashboard");
      const response = await axios.post(`${BASE_URL}auth/customer/login`, { email, password });
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);