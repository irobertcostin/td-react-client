import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"


import RetourePolicy from "./components/politics/RetourePolicy";
import PaymentPolicy from "./components/politics/PaymentPolicy";
import TermsPolicy from "./components/politics/TermsPolicy";
import UtilizationPolicy from "./components/politics/UtilizationPolicy";
import RegistrationPolicy from "./components/politics/RegistrationPolicy";




function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/politica-rambursare" element={<RetourePolicy />} />
        <Route path="/politica-inscriere" element={<RegistrationPolicy />} />
        <Route path="/politica-utilizare" element={<UtilizationPolicy />} />
        <Route path="/politica-plata" element={<PaymentPolicy />} />
        <Route path="/termeni-conditii" element={<TermsPolicy />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
