import { createSlice } from '@reduxjs/toolkit';
import { fetchProviders, deleteProvider, updateProvider } from '../../actions/AdminBackOffice/providerActions';

const initialState = {
  providers: [],
  loading: false,
  error: null,
};

const providerSlice = createSlice({
  name: 'providers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProviders.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProviders.fulfilled, (state, action) => {
        state.loading = false;
        state.providers = action.payload;
      })
      .addCase(fetchProviders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteProvider.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProvider.fulfilled, (state, action) => {
        state.loading = false;
        state.providers = state.providers.filter(provider => provider._id !== action.payload);
      })
      .addCase(deleteProvider.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(updateProvider.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProvider.fulfilled, (state, action) => {
        state.loading = false;
        // Find the index of the updated customer in the state array
        const index = state.providers.findIndex(provider => provider._id === action.payload._id);
        if (index !== -1) {
          // If found, replace the old provider with the updated one
          state.providers[index] = action.payload;
        }
      })
      .addCase(updateProvider.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default providerSlice.reducer;
