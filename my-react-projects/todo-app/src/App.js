// without this, your app cannot remember tasks
import { useState } from "react";

//import important tools from react router library for navigation 
import { Routes, Route, BrowserRouter } from "react-router-dom";

// below all are the pages which are imported in app.js
import { Add } from "./Add";
import { Show } from "./Show";
import { Header } from "./Header";
import { Done } from './Done.js';
import { Footer } from './Footer'

// Home component for the paragraph
function Home() {
  return (
<div className="flex items-center justify-center min-h-screen text-center px-6">
  <div className="max-w-3xl bg-black/50 p-6 rounded-2xl shadow-lg mb-[160px]">
    
        <div className="text-left leading-none mb-6">
          <p className="text-white text-5xl tracking-widest">WHY<span className="text-2xl font-extrabold text-red-400">TASK</span></p>
          <p className="text-5xl font-extrabold text-white">MANAGEMENT</p>
        </div>


    
    <p className="text-lg leading-relaxed text-justify text-white">
      Prioritising tasks is one of the most powerful habits that separates
      successful people from those who stay stuck in constant busyness. Every
      day gives us a limited amount of time and energy, and when we spread
      ourselves too thin, we often end up exhausted yet unaccomplished. By
      learning to identify what is truly important and giving it our best
      attention first, we not only save time but also build confidence through
      consistent progress. Prioritising is not about doing everything; it’s
      about recognising what will bring the greatest value, impact, or
      learning, and focusing on that.
      <br /><br />
      When we arrange our tasks by importance, we create clarity, reduce
      stress, and free our minds from the burden of unnecessary distractions.
      It helps us say “no” to the things that don’t serve our goals and “yes”
      to the things that shape our growth. Remember, productivity is not
      measured by the number of tasks we finish but by the significance of the
      results we create. Every time you choose to prioritise wisely, you’re
      not just organising your work—you’re training your mind to think with
      purpose, take control of your journey, and move step by step toward
      long-term success.
    </p>
  </div>
</div>
  );
}

// This defines your main app component. Everything inside will run when your app starts
function App() {
  let [todo, setTodo] = useState([]);

  return (
    <div
      className="flex flex-col min-h-screen justify-between"
      style={{
        backgroundImage:
          "url('https://mir-s3-cdn-cf.behance.net/project_modules/fs/8a97c0106861523.5f9994f295d27.jpg')",
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />  {/* 👈 show paragraph on homepage */}
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
