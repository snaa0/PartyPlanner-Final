import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data'; // لجلب الفئات في القائمة المنسدلة
import { Upload, DollarSign, MapPin, Phone, Type, Image as ImageIcon } from 'lucide-react';

const AddListingPage = () => {
  const navigate = useNavigate();
  
  // حالة لتخزين بيانات النموذج
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    price: '',
    location: '',
    phone: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Service Data:', formData);
    
    // محاكاة عملية الحفظ
    alert("تم إضافة الخدمة بنجاح! سيتم مراجعتها ونشرها قريباً.");
    navigate('/services'); // إعادة التوجيه لصفحة الخدمات
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-extrabold text-gray-900">Add New Service</h1>
          <p className="mt-2 text-gray-600">Fill in the details to reach thousands of customers</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            
            {/* 1. تفاصيل أساسية */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Basic Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* اسم الخدمة */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Title</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Type className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="title"
                      required
                      className="pl-10 block w-full border-gray-300 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 p-3 outline-none"
                      placeholder="e.g., Luxury Wedding Photography"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* الفئة - مهمة جداً */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    name="category"
                    required
                    className="block w-full border-gray-300 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 p-3 outline-none bg-white"
                    onChange={handleChange}
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat._id} value={cat.name}>{cat.icon} {cat.name}</option>
                    ))}
                  </select>
                </div>

                {/* الموقع */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="location"
                      required
                      className="pl-10 block w-full border-gray-300 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 p-3 outline-none"
                      placeholder="City, Area"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. التواصل والسعر */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Contact & Pricing</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* رقم الهاتف - مهم جداً */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="pl-10 block w-full border-gray-300 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 p-3 outline-none"
                      placeholder="079 xxxxxxx"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* السعر */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price (Optional)</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      name="price"
                      className="pl-10 block w-full border-gray-300 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 p-3 outline-none"
                      placeholder="Leave empty for 'Contact us'"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. الوصف والصورة */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-gray-900 border-b pb-2">Description & Image</h3>
              
              {/* رابط الصورة */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <ImageIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="url"
                    name="image"
                    required
                    className="pl-10 block w-full border-gray-300 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 p-3 outline-none"
                    placeholder="https://example.com/image.jpg"
                    onChange={handleChange}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">Paste a link to your image (or verify later).</p>
              </div>

              {/* الوصف */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  name="description"
                  rows="4"
                  className="block w-full border-gray-300 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 p-3 outline-none"
                  placeholder="Describe your service..."
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            {/* زر الحفظ */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent text-lg font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition shadow-lg shadow-indigo-200"
              >
                <Upload size={20} />
                Publish Service
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddListingPage;