import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-20">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 YourCompany. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-200 transition-colors duration-300"
          >
            Contact Us
          </a>
        </div>
         
      </div>
    </footer>
  );
};

export default Footer;
