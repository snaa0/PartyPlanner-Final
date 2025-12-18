import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, User, Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-100 h-20 fixed w-full top-0 z-50 flex items-center">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* الشعار */}
        <Link to="/" className="text-3xl font-extrabold text-indigo-600 tracking-tight flex items-center gap-2">
          <span>🎉</span>
          PartyPlanner
        </Link>

        {/* الأزرار */}
        <div className="flex items-center gap-4 md:gap-6">
          
          {/* روابط سريعة للمزود والمفضلة */}
          <div className="hidden md:flex items-center gap-4 mr-2">
            <Link to="/my-listings" className="text-gray-500 hover:text-indigo-600 transition" title="Provider Dashboard">
              <LayoutDashboard size={20} />
            </Link>
            <Link to="/favorites" className="text-gray-500 hover:text-red-500 transition" title="My Favorites">
              <Heart size={20} />
            </Link>
            <Link to="/profile" className="text-gray-500 hover:text-indigo-600 transition" title="Profile">
              <User size={20} />
            </Link>
          </div>

          <div className="h-6 w-px bg-gray-200 hidden md:block"></div>

          {/* أزرار الدخول */}
          <Link 
            to="/login" 
            className="text-gray-600 hover:text-indigo-600 font-bold text-sm transition"
          >
            Sign In
          </Link>
          
          <Link 
            to="/add-listing" 
            className="bg-indigo-600 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
          >
            Add Service
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;