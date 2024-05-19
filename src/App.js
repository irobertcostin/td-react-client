import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar"
import Footer from "./components/home/Footer"
import Home from "./components/home/Home";
import ScrollToTop from "./components/ScrollToTop";

import RetourePolicy from "./components/politics/RetourePolicy";
import PaymentPolicy from "./components/politics/PaymentPolicy";
import TermsPolicy from "./components/politics/TermsPolicy";
import UtilizationPolicy from "./components/politics/UtilizationPolicy";
import RegistrationPolicy from "./components/politics/RegistrationPolicy";
import Login from "./components/login-register/Login";
import store from "./components/redux-store/Store";
import { Provider } from "react-redux"
import Register from "./components/login-register/Register";
import Courses from "./components/other/Courses";
import ConfirmPasswordReset from "./components/login-register/ConfirmPasswordReset";
import PasswordReset from "./components/login-register/PasswordReset";
import ValidateAccount from "./components/login-register/ValidateAccount";
import PrivateRoute from "./components/login-register/PrivateRoute";
import MyAccount from "./components/user/MyAccount";



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <div className="w-full pt-32">
          <Routes>

            <Route element={<PrivateRoute />}>
              <Route path="/contul-meu" element={<MyAccount />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/inregistrare" element={<Register />} />
            <Route path="/autentificare" element={<Login />} />
            <Route path="/validare-cont/:token" element={<ValidateAccount />} />
            <Route path="/resetare-parola" element={<PasswordReset />} />
            <Route path="/confirmare-resetare-parola/:token" element={<ConfirmPasswordReset />} />


            <Route path="/politica-rambursare" element={<RetourePolicy />} />
            <Route path="/politica-inscriere" element={<RegistrationPolicy />} />
            <Route path="/politica-utilizare" element={<UtilizationPolicy />} />
            <Route path="/politica-plata" element={<PaymentPolicy />} />
            <Route path="/termeni-conditii" element={<TermsPolicy />} />





          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
