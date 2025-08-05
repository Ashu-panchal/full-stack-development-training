import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Add } from "./Add";
import { Show } from "./Show";
import { Header } from "./Header";
import { Done } from './Done.js';
import { Footer } from './Footer'

function App() {

  return (
    <div class="flex flex-col min-h-screen justify-between">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Add" element={<Add />} />
          <Route path="/Show" element={<Show />} />
          <Route path="/Done" element={<Done />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export { App };