import { createAsyncThunk } from '@reduxjs/toolkit';
import * as providerApi from '../api/providerApi';

export const fetchProviders = createAsyncThunk(
  'providers/fetchProviders',
  async () => {
    try {
      const providers = await providerApi.fetchAllProviders();
      return providers;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteProvider = createAsyncThunk(
  'customers/deleteProvider',
  async (providerId) => {
    try {
      await customerApi.deleteProvider(providerId);
      return providerId;
    } catch (error) {
      throw error;
    }
  }
);

export const updateProvider = createAsyncThunk(
  'providers/updateProvider',
  async (provider) => {
    try {
      const updatedProvider = await providerApi.updateProvider(provider);
      return updatedProvider;
    } catch (error) {
      throw error;
    }
  }
);
