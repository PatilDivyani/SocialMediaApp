// src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./Components/HomePage";
import DetailPage from "./Components/DetailPage";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/item/:id" element={<DetailPage />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
