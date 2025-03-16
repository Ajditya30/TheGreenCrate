import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">TheGreenCrate</h3>
            <p className="text-emerald-100">A research-driven sustainable packaging solution for the IB Group 4 science research initiative.</p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-emerald-100 hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link to="/journey" className="text-emerald-100 hover:text-white transition-colors duration-200">Our Journey</Link></li>
            </ul>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="text-md font-semibold mb-4">Contact</h4>
            <p className="text-emerald-100">DPS International, Gurgaon</p>
            <p className="text-emerald-100 mt-2">For inquiries:</p>
            <a href="mailto:contact@thegreencrate.org" className="text-emerald-100 hover:text-white transition-colors duration-200">contact@thegreencrate.org</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-emerald-800 text-center">
          <p className="text-emerald-100">&copy; {new Date().getFullYear()} TheGreenCrate. All rights reserved.</p>
          <p className="text-emerald-100 mt-1">An IB Group 4 Research Project</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 