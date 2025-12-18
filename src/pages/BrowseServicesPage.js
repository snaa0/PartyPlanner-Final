import React, { useState } from 'react';
import { listings, categories } from '../data';
import { MapPin, Star, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';

const BrowseServicesPage = () => {
  // حالة لتخزين الفئة المختارة (للفلترة مستقبلاً)
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-6">
        
        {/* العنوان العلوي */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Browse Services</h1>
          <p className="text-gray-500 mt-1">Showing {listings.length} results</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* 1. Sidebar - القائمة الجانبية للفلاتر */}
          <div className="w-full md:w-1/4">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm sticky top-24">
              <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
                <Filter size={20} className="text-indigo-600" />
                <h2 className="font-bold text-lg">Filters</h2>
              </div>

              {/* فلتر الفئات */}
              <div className="mb-8">
                <h3 className="font-semibold mb-4 text-gray-800">Category</h3>
                <div className="space-y-3">
                  {/* خيار الكل */}
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="category" 
                      checked={selectedCategory === 'All'}
                      onChange={() => setSelectedCategory('All')}
                      className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                    />
                    <span className="text-gray-600 group-hover:text-indigo-600 transition">All Categories</span>
                  </label>

                  {/* باقي الفئات من البيانات */}
                  {categories.map((cat) => (
                    <label key={cat._id} className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="category"
                        checked={selectedCategory === cat.name}
                        onChange={() => setSelectedCategory(cat.name)}
                        className="w-4 h-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                      />
                      <span className="text-gray-600 group-hover:text-indigo-600 transition">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* فلتر السعر (شكلي حالياً) */}
              <div>
                <h3 className="font-semibold mb-4 text-gray-800">Price Range</h3>
                <div className="flex gap-2">
                  <input type="number" placeholder="Min" className="w-full p-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-indigo-500" />
                  <input type="number" placeholder="Max" className="w-full p-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-indigo-500" />
                </div>
                <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg font-medium hover:bg-indigo-700 transition">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* 2. Services Grid - شبكة الخدمات */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {listings.map((item) => (
                <div key={item._id} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 flex flex-col">
                  {/* الصورة */}
                  <div className="h-48 overflow-hidden relative bg-gray-200">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded-md text-xs font-bold shadow-sm flex items-center gap-1">
                      <Star size={12} className="text-yellow-500 fill-current" />
                      {item.rating}
                    </div>
                  </div>

                  {/* المحتوى */}
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="text-xs font-bold text-indigo-600 mb-2 uppercase tracking-wide">
                      {item.category}
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-4 mt-auto">
                      <MapPin size={14} />
                      <span className="truncate">{item.location}</span>
                    </div>

                    <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                      <div className="font-bold text-xl text-gray-900">
                        {item.hasFixedPrice ? `$${item.price}` : <span className="text-sm text-indigo-600">Contact Us</span>}
                      </div>
                      <Link to={`/service/${item._id}`} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-indigo-50 hover:text-indigo-600 transition">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BrowseServicesPage;