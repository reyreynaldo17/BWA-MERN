import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "assets/bootstrap/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/properties/:id" element={<DetailsPage />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/example" element={<Example />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
