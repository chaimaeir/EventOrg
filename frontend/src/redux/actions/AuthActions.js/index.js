// src/redux/actions/authActions.js
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/auth'; //

export const registerProvider = createAsyncThunk(
  'auth/registerProvider',
  async (providerData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/register`, providerData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);
