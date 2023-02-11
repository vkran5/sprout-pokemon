import React from "react";
import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./Components/NavbarComponent";
import DetailPage from "./Pages/DetailPage";
import MainPage from "./Pages/MainPage";


function App() {



  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pokemon" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
