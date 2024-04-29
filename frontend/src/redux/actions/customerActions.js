import { createAsyncThunk } from '@reduxjs/toolkit';
import * as customerApi from '../api/customerApi';

export const fetchCustomers = createAsyncThunk(
  'customers/fetchCustomers',
  async () => {
    try {
      const customers = await customerApi.fetchAllCustomers();
      return customers;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteCustomer = createAsyncThunk(
  'customers/deleteCustomer',
  async (customerId) => {
    try {
      await customerApi.deleteCustomer(customerId);
      return customerId;
    } catch (error) {
      throw error;
    }
  }
);

export const updateCustomer = createAsyncThunk(
  'customers/updateCustomer',
  async (customer) => {
    try {
      const updatedCustomer = await customerApi.updateCustomer(customer);
      return updatedCustomer;
    } catch (error) {
      throw error;
    }
  }
);
