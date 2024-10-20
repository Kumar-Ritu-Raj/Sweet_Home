import AddApartmentForm from "./components/AddApartmentForm.tsx";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApartmentDetails from "./components/ApartmentDetails.tsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AddApartmentForm />} />
        <Route path="/apartment-details" element={<ApartmentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
