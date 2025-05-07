import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const FooterSection = () => {
  return (
    <footer className="primary text-gray-300 py-12 px-6 font-bold" id='Contact'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
            <div>
          <h2 className="text-white text-3xl font-bold mb-2">Price Book Calculator</h2>
          <p className="text-sm">Empowering your business with real-time pricing and smart service quoting.</p>
        </div>

      
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#Home" className="hover:text-white">Home</a></li>
            <li><a href="#CalculatorSection" className="hover:text-white">Calculator</a></li>
            <li><a href="#ProductListPage" className="hover:text-white">Product List</a></li>
            <li><a href="#Contact" className="hover:text-white">Contact Us</a></li>
            <li><a href="#Terms&Privacy" className="hover:text-white">Terms & Privacy</a></li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: abc@gmail.com</li>
            <li>Phone: 1234567890</li>
            <li>Address:123 , 1st street , colombo</li>
          </ul>
        </div>

     
        <div>
          <h3 className="text-white font-semibold mb-3">Stay Connected</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
          </div>
          <form className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded bg-gray-800 border border-gray-700 text-white focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10">
        © price book calcuator. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
