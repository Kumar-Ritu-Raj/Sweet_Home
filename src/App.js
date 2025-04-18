import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddApartmentForm from "./components/AddApartmentForm.tsx";
import ApartmentDetails from "./components/ApartmentDetails.tsx";
import HomePage from "./components/Home.tsx";
import SignInSignUp from "./components/SignInSignUp.tsx";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/Sweet_Home">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInSignUp />} />
        <Route path="/apartment-form" element={<AddApartmentForm />} />
        <Route path="/apartment-details" element={<ApartmentDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
