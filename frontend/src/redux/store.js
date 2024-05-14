// store.js
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './reducers/AdminBackOffice/customerSlice'; 
import providerReducer from './reducers/AdminBackOffice/providerSlice';

const store = configureStore({
  reducer: {
    customers: customerReducer,
    providers: providerReducer,
  },
});

export default store;
