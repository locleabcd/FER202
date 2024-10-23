import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0">
          <h4 className="text-2xl font-semibold mb-2">Orchid Shop</h4>
          <p className="text-gray-400">Bringing beauty to your home.</p>
        </div>
        <div className="mb-8 md:mb-0">
          <h5 className="text-xl font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2">
            <li>
              <a
                href="/"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/shop"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* Follow Us Section */}
        <div className="mb-8 md:mb-0">
          <h5 className="text-xl font-semibold mb-4">Follow Us</h5>
          <ul className="space-y-2">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200 transition-colors"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-700 mt-8">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Orchid Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
