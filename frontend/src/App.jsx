import "../src/apptest.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./Pages/auth/Login"
import Register from './Pages/auth/Register';
import RegisterProvider from './Pages/auth/RegisterProvider'
import LoginAdminForm from "./Pages/auth/Admin/loginadmin";
import SignUpAs from "./Pages/auth/SignUpAs";


  
  function App() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registerprovider" element={<RegisterProvider />} />
        <Route path="/loginAdmin" element={<LoginAdminForm />} />
        <Route path="/signUp" element={<SignUpAs />} />
      </Routes>
    </BrowserRouter>  
    );
  }
  


export default App
