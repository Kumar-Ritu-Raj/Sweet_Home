import AddApartmentForm from "./components/AddApartmentForm.tsx";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ApartmentDetails from "./components/ApartmentDetails.tsx";
import HomePage from "./components/Home.tsx";
import SignInSignUp from "./components/SignInSignUp.tsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/login" element={< SignInSignUp/>} />
        <Route path="/apartment-form" element={<AddApartmentForm />} />
        <Route path="/apartment-details" element={<ApartmentDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
