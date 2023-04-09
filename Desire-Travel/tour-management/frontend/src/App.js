import React from "react";
import "./App.css";
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import ThankYou from "./pages/ThankYou";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TourCard from "./shared/TourCard";
import SearchResultList from "./pages/SearchResultList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/tours/:id' element={<TourDetails />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/card' element={<TourCard />} />
        <Route path='/tours/search' element={<SearchResultList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};
export default App;
