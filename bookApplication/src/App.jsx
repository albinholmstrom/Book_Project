import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar,";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
