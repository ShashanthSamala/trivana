import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, AlertCircle, ClipboardList, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-emerald-600 to-emerald-700 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white hover:text-emerald-100 transition-colors"
          >
            <Leaf className="h-7 w-7" />
            <span className="text-2xl font-bold tracking-tight">Thrivana</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-emerald-100 hover:text-white transition-colors"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            
            <Link 
              to="/report" 
              className="flex items-center space-x-2 text-emerald-100 hover:text-white transition-colors"
            >
              <AlertCircle className="h-5 w-5" />
              <span>Report Issue</span>
            </Link>
            
            <Link 
              to="/issues" 
              className="flex items-center space-x-2 text-emerald-100 hover:text-white transition-colors"
            >
              <ClipboardList className="h-5 w-5" />
              <span>View Issues</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-lg text-emerald-100 hover:text-white hover:bg-emerald-600 transition-colors">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu (hidden by default) */}
        <div className="hidden md:hidden pb-4">
          <Link 
            to="/" 
            className="block py-2 text-emerald-100 hover:text-white transition-colors"
          >
            <div className="flex items-center space-x-2">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </div>
          </Link>
          
          <Link 
            to="/report" 
            className="block py-2 text-emerald-100 hover:text-white transition-colors"
          >
            <div className="flex items-center space-x-2">
              <AlertCircle className="h-5 w-5" />
              <span>Report Issue</span>
            </div>
          </Link>
          
          <Link 
            to="/issues" 
            className="block py-2 text-emerald-100 hover:text-white transition-colors"
          >
            <div className="flex items-center space-x-2">
              <ClipboardList className="h-5 w-5" />
              <span>View Issues</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;