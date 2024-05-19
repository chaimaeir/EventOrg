import { createSlice } from '@reduxjs/toolkit';
import { fetchCustomers, deleteCustomer, updateCustomer } from '../../actions/AdminBackOffice/customerActions';

const initialState = {
  customers: [],
  loading: false,
  error: null,
};

const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCustomers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCustomers.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = action.payload;
      })
      .addCase(fetchCustomers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCustomer.fulfilled, (state, action) => {
        state.loading = false;
        state.customers = state.customers.filter(customer => customer._id !== action.payload);
      })
      .addCase(deleteCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(updateCustomer.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCustomer.fulfilled, (state, action) => {
        state.loading = false;
        // Find the index of the updated customer in the state array
        const index = state.customers.findIndex(customer => customer._id === action.payload._id);
        if (index !== -1) {
          // If found, replace the old customer with the updated one
          state.customers[index] = action.payload;
        }
      })
      .addCase(updateCustomer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
      
  },
});

export default customerSlice.reducer;
