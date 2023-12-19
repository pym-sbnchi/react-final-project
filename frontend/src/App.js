import React from "react";
import "./index.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Rewards from "./Pages/Rewards";
import GiftCards from "./Pages/GiftCards";
import FindStore from "./Pages/FindStore";
import Login from "./Pages/Login";
import JoinNow from "./Pages/JoinNow";
import Footer from "./Components/Footer";


export default function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/gift" element={<GiftCards />} />
          <Route path="/find-store" element={<FindStore />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<JoinNow />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}