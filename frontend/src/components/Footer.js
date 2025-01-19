import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    
    const yearElement = document.getElementById("year");
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }

    
    const scrollTopBtn = document.getElementById("scrollTop");
    const handleScroll = () => {
      if (window.scrollY > 200) {
        scrollTopBtn?.classList.remove("hidden");
      } else {
        scrollTopBtn?.classList.add("hidden");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-4">
        
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
          <h4 className="text-xl font-semibold text-white mb-2">About Us</h4>
          <p>Your trusted partner in innovative solutions and exceptional service.</p>
        </div>

        
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
          <h4 className="text-xl font-semibold text-white mb-2">Quick Links</h4>
          <ul>
            <li>
              <a href="/about" className="hover:text-blue-400">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-blue-400">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-400">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-blue-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        
        <div className="w-full sm:w-1/3">
          <h4 className="text-xl font-semibold text-white mb-2">Contact Us</h4>
          <p>
            Email:{" "}
            <a href="mailto:support@flysmart.com" className="hover:text-blue-400">
              support@flysmart.com
            </a>
          </p>
          <p>Phone: +94 710688893</p>
        </div>
      </div>

      
      <div className="text-center mt-6">
        <p className="text-sm">
          &copy; <span id="year"></span> ACE Hobby. All rights reserved.
        </p>
        <button
          id="scrollTop"
          className="fixed bottom-4 right-4 hidden bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
          onClick={handleScrollTop}
        >
          ↑ Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;
