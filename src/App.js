import React from 'react';
import './App.css';
import HomePage from './pages/Home/HomePage';
import Form1 from "../src/pages/Forms/Form";
import {Routes, BrowserRouter,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes >
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<Form1 />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
