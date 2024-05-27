// store.js
import { configureStore } from '@reduxjs/toolkit';
import customerReducer from './reducers/AdminBackOffice/customerSlice'; 
import providerReducer from './reducers/AdminBackOffice/providerSlice';
import authReducer from './Slices/AuthSlices';

const store = configureStore({
  reducer: {
    customers: customerReducer,
    providers: providerReducer,
    auth: authReducer,
  },
});

export default store;
