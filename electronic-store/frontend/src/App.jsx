import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./app/components/Header/Header";
import Footer from "./app/components/Footer/Footer";
import Navbar from "./app/components/Navbar/Navbar";
import MainPage from "./app/views/Mainpage";
import About from "./app/views/About";
import Cart from "./app/views/Cart";
import Login from "./app/views/Login";
import Admin from "./app/views/Admin";
import "./styles/index.css";
import "./styles/components.css";
import "./styles/App.css";

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#242424', minHeight: '100vh', color: 'white' }}>
      <Header />
      <Navbar />
      <main style={{ padding: '2rem', color: 'white' }}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;