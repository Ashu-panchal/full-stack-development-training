import React, { useState } from "react"; // ✅ Import useState
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header"; // ✅ Import Header
import Login from "./Login";   // ✅ Import Login

function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div
  className="min-h-screen text-white flex flex-col"
  style={{
    backgroundImage: `linear-gradient(to right, #0a0a0aff, #1a1a1aff 25%, #2a2a2aff 50%, #3a3a3aff 75%, #4a4a4aff)`,
  }}
>
      {/* Header */}
      <Header onLoginClick={() => setShowLogin(true)} />

      {/* Main content */}
      <div className="flex-1 flex items-center px-6">
        <div className="flex items-start gap-10">
          {/* Text or Login Form */}
          <div className="max-w-[900px] ml-[100px] mt-[120px]">
            {showLogin ? (
              <Login />
            ) : (
              <>
                <h1 className="text-3xl font-bold mb-7 text-white">Safety</h1>
                <p
                  className="text-lg leading-relaxed text-white mr-60"
                  style={{ textAlign: "justify" }}
                >
                  Post-pay is as safe as your dark secrets because nobody can
                  steal them from you! Below is a quick brief about how our
                  transaction algorithm works. Click on "More" to know more...
                  Every transaction you make is encrypted end-to-end, ensuring
                  that no third party can intercept or alter it. Our system runs
                  on a decentralized verification process, meaning there’s no
                  single point of failure. We also use multi-layer authentication
                  to confirm it’s really you — because your trust is our top
                  priority. With real-time fraud detection, suspicious activity
                  is flagged and stopped before it even reaches your account. All
                  sensitive information is stored in secure, isolated
                  environments — away from hackers’ reach. And because we
                  constantly update our security protocols, your money is
                  protected not only today, but also tomorrow. In short, we built
                  our safety system with one rule in mind: You should sleep
                  better at night knowing your transactions are untouchable.
                </p>
              </>
            )}
          </div>

          {/* Image Section (switch based on showLogin) */}
        <img
  src={
    showLogin
      ? "https://vodlix.com/assets/group-534.png" // Login image
      : "https://static.vecteezy.com/system/resources/previews/023/499/177/non_2x/digital-data-protection-design-illustration-cyber-security-illustration-background-cloud-computing-network-safety-concept-free-png.png" // Safety image
  }
  alt="Illustration"
  className={
    showLogin
      ? "w-[550px] h-auto rounded-xl fixed ml-[70px] mt-[190px]" // Login image style
      : "w-[550px] h-auto rounded-2xl fixed ml-[870px] mt-[230px]" // Safety image style
  }
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
      </Routes>
    </Router>
  );
}

export default App;
