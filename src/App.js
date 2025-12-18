import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BrowseServicesPage from './pages/BrowseServicesPage';
import ListingDetails from './pages/ListingDetails';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddListingPage from './pages/AddListingPage';
import ProviderDashboard from './pages/ProviderDashboard';
import AdminCategoryPage from './pages/AdminCategoryPage';
import UserProfilePage from './pages/UserProfilePage';
import FavoritesPage from './pages/FavoritesPage';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<BrowseServicesPage />} />
          <Route path="/service/:id" element={<ListingDetails />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/add-listing" element={<AddListingPage />} />
          
          {/*  صفحة لوحة تحكم المزود */}
          <Route path="/my-listings" element={<ProviderDashboard />} />
          {/* صفحة أدمن الفئات */}
<Route path="/admin/categories" element={<AdminCategoryPage />} />
<Route path="/profile" element={<UserProfilePage />} />
<Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;