// store.js
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './reducers/customerSlice'; 
import providerReducer from './reducers/providerSlice';

const store = configureStore({
  reducer: {
    customers: customerReducer,
    providers: providerReducer,
  },
});

export default store;
