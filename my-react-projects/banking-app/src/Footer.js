import React from "react";

function Footer() {
  return (
    <footer className="bg-white/20 backdrop-blur-md text-white py-4 mt-auto">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} Post-Pay. All rights reserved. By Ashu panchal | IT (1st year)
      </div>
    </footer>
  );
}

export default Footer;
