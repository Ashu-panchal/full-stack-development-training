import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Add } from "./Add";
import { Show } from "./Show";
import { Header } from "./Header";
import { Done } from './Done.js';
import { Footer } from './Footer'

function App() {
  let [todo, setTodo] = useState([]);

  return (
    <div class="flex flex-col min-h-screen justify-between">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/Add" element={<Add todo={todo} setTodo={setTodo} />} />
          <Route path="/Show" element={<Show todo={todo} setTodo={setTodo}/>} />
          <Route path="/Done" element={<Done todo={todo} />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export { App };