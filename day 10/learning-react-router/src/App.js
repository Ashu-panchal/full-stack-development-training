import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Homepage from './HomePage';
import Footer from './Footer';
import Friendspage from './Friendspage';
import Profilepage from './Profilepage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />

        <div className="flex-grow">
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/profile" element={<Profilepage />} />
            <Route path="/friends" element={<Friendspage />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
