import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Camera, Save } from 'lucide-react';

const UserProfilePage = () => {
  // بيانات افتراضية (محاكاة لمستخدم مسجل دخول)
  const [profile, setProfile] = useState({
    name: 'Snaa Project',
    email: 'student@example.com',
    phone: '0791234567',
    location: 'Amman, Jordan',
    bio: 'Love organizing parties and events!',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80'
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Profile:', profile);
    alert("تم تحديث الملف الشخصي بنجاح!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">My Profile</h1>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          
          {/* قسم الصورة العلوية (Cover) */}
          <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-500"></div>

          <div className="px-8 pb-8">
            {/* الصورة الشخصية */}
            <div className="relative -mt-16 mb-6">
              <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-md mx-auto md:mx-0">
                <img 
                  src={profile.image} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <button className="absolute bottom-0 left-1/2 md:left-24 transform -translate-x-1/2 bg-gray-900 text-white p-2 rounded-full hover:bg-gray-700 transition">
                <Camera size={16} />
              </button>
            </div>

            {/* نموذج التعديل */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* الاسم */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                      className="pl-10 block w-full border-gray-300 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 p-2.5 outline-none"
                    />
                  </div>
                </div>

                {/* الإيميل (للقراءة فقط عادةً) */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={profile.email}
                      disabled
                      className="pl-10 block w-full border-gray-200 bg-gray-50 rounded-lg border p-2.5 outline-none text-gray-500 cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* الهاتف */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                      className="pl-10 block w-full border-gray-300 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 p-2.5 outline-none"
                    />
                  </div>
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
                      value={profile.location}
                      onChange={handleChange}
                      className="pl-10 block w-full border-gray-300 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 p-2.5 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* نبذة عني */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                <textarea
                  name="bio"
                  rows="4"
                  value={profile.bio}
                  onChange={handleChange}
                  className="block w-full border-gray-300 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 p-3 outline-none"
                  placeholder="Tell us about yourself..."
                ></textarea>
              </div>

              {/* زر الحفظ */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
                >
                  <Save size={20} />
                  Save Changes
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;