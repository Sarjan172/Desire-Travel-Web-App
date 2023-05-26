import React from "react";
import "./App.css";
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./pages/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import Dashboard from "./components/Admin/Dropdown";
import ThankYou from "./pages/ThankYou";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TourCard from "./shared/TourCard";
import SearchResultList from "./pages/SearchResultList";
import CreateTour from "./components/Admin/CreateTour";
import AllTours from "./components/Admin/AllTour";
import Gallery from "./components/image-gallery/MasonryImagesGallery";
import EditTour from "./components/Admin/EditTour";
import BookingTable from "./components/Admin/BookingTable";
import ForgotPassword from "./pages/Forgot";
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
        <Route path='/createtour' element={<CreateTour />} />
        <Route path='/alltour' element={<AllTours />} />
        <Route path='/edittours/:id' element={<EditTour />} />
        <Route path='/allbooking' element={<BookingTable />} />
        <Route path='/card' element={<TourCard />} />
        <Route path='/tours/search' element={<SearchResultList />} />
        <Route path='/forgot' element={<ForgotPassword />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/dropdown' element={<Dashboard />} />
      </Routes >
      <Footer />
    </BrowserRouter>
  )
};
export default App;
