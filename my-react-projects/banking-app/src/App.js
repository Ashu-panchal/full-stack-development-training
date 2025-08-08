import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 text-white flex flex-col">
      {/* Fixed header */}
      <Header />

      {/* Main content */}
      <div className="flex-1 flex items-center px-6">
        <div className="flex items-start gap-10">
          {/* Text Section */}
          <div className="max-w-[900px]">
            <h1 className="text-3xl font-bold mb-7 ml-[120px] mt-[120px] text-white">
              Safety
            </h1>
            <p
              className="text-lg leading-relaxed ml-[120px] text-white"
              style={{ textAlign: "justify" }}
            >
              Post-pay is as safe as your dark secrets because nobody can steal it from you!
              Below is a quick brief about how our transaction algorithm works.
              Click on "More" to know more...
              Every transaction you make is encrypted end-to-end, ensuring that no third party can intercept or alter it.
              Our system runs on a decentralized verification process, meaning there’s no single point of failure.
              We also use multi-layer authentication to confirm it’s really you — because your trust is our top priority.
              With real-time fraud detection, suspicious activity is flagged and stopped before it even reaches your account.
              All sensitive information is stored in secure, isolated environments — away from hackers’ reach.
              And because we constantly update our security protocols, your money is protected not only today, but also tomorrow.
              In short, we built our safety system with one rule in mind: You should sleep better at night knowing your transactions are untouchable.
            </p>
          </div>

          {/* Image Section */}
          <img
            src="https://static.vecteezy.com/system/resources/previews/023/499/177/non_2x/digital-data-protection-design-illustration-cyber-security-illustration-background-cloud-computing-network-safety-concept-free-png.png"
            alt="Security Illustration"
            className="w-[460px] h-auto mt-[210px] ml-[150px] rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Removed Login route */}
      </Routes>
    </Router>
  );
}

export default App;
