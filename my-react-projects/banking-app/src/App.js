import React, { useState } from "react";
import Header from "./Header";
import Header2 from "./Header2";
import Login from "./Login";
import Footer from "./Footer";
import CreateAccount from "./CreateAccount";
import BankDetails from "./BankDetails";
import Pay from "./Pay";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState(null); // "pay", "bank", null

  return (
    <div className="min-h-screen flex flex-col text-white bg-blue-800">
      {/* Swap headers when logged in */}
      {isLoggedIn ? (
        <Header2
          isLoggedIn={true}
          onBankDetailsClick={() => setActiveSection("bank")}
          onPayClick={() => setActiveSection("pay")}
        />
      ) : (
        <Header
          onLoginClick={() => {
            setShowLogin(true);
            setShowCreateAccount(false);
          }}
          onCreateAccountClick={() => {
            setShowCreateAccount(true);
            setShowLogin(false);
          }}
        />
      )}

      <div className="flex-1 flex items-center px-6 mt-[100px]">
        <div className="flex items-start gap-10">
          <div className="max-w-[1120px] ml-[80px] mt-[30px]">
            {showLogin && (
              <div className="text-black">
                <Login
                  removeMargins={false}
                  onLoginSuccess={() => {
                    setIsLoggedIn(true);
                    setShowLogin(false);
                  }}
                />
              </div>
            )}

            {/* Show Pay OR BankDetails depending on activeSection */}
            {activeSection === "pay" && (
              <Pay onClose={() => setActiveSection(null)} />
            )}

            {activeSection === "bank" && (
              <div className="text-black relative">
                <BankDetails />
                <button
                  className="absolute top-2 right-2 px-4 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700"
                  onClick={() => setActiveSection(null)}
                >
                  X
                </button>
              </div>
            )}

            {showCreateAccount && (
              <div className="text-black">
                <CreateAccount />
              </div>
            )}

            {/* Default Home Section */}
            {!showLogin &&
              !showCreateAccount &&
              !isLoggedIn &&
              activeSection === null && (
                <>
                  <h1 className="text-3xl font-bold mb-7 text-white">Safety</h1>
                  <p
                    className="text-lg leading-relaxed text-white mr-60"
                    style={{ textAlign: "justify" }}
                  >
                    Post-pay is as safe as your dark secrets because nobody can
                    steal them from you! Below is a quick brief about how our
                    transaction algorithm works. Click on "More" to know more...
                    Every transaction you make is encrypted end-to-end,
                    ensuring that no third party can intercept or alter it. Our
                    system runs on a decentralized verification process,
                    meaning there’s no single point of failure. We also use
                    multi-layer authentication to confirm it’s really you —
                    because your trust is our top priority. With real-time fraud
                    detection, suspicious activity is flagged and stopped before
                    it even reaches your account. All sensitive information is
                    stored in secure, isolated environments — away from hackers’
                    reach. And because we constantly update our security
                    protocols, your money is protected not only today, but also
                    tomorrow. In short, we built our safety system with one
                    rule in mind: You should sleep better at night knowing your
                    transactions are untouchable.
                  </p>
                </>
              )}
          </div>

          {/* Hide image after login */}
          {!isLoggedIn && (
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/499/177/non_2x/digital-data-protection-design-illustration-cyber-security-illustration-background-cloud-computing-network-safety-concept-free-png.png"
              alt="Illustration"
              className="w-[530px] h-auto rounded-2xl fixed ml-[1060px] mt-[85px]"
            />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
