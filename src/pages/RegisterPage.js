import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, Briefcase } from 'lucide-react';

const RegisterPage = () => {
  const navigate = useNavigate();
  
  // حالة البيانات، لاحظي إضافة "role"
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'customer' // القيمة الافتراضية زبون
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert("كلمات المرور غير متطابقة!");
      return;
    }

    console.log('Register Data:', formData);
    alert("تم إنشاء الحساب بنجاح! يمكنك تسجيل الدخول الآن.");
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
        
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us to plan your perfect event
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          
          {/* اختيار الدور (زبون أو مزود) */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              type="button"
              onClick={() => setFormData({...formData, role: 'customer'})}
              className={`p-3 rounded-xl border flex flex-col items-center justify-center transition ${
                formData.role === 'customer' 
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700 ring-1 ring-indigo-500' 
                  : 'border-gray-200 text-gray-500 hover:bg-gray-50'
              }`}
            >
              <User className="mb-2 h-6 w-6" />
              <span className="text-sm font-bold">Customer</span>
            </button>

            <button
              type="button"
              onClick={() => setFormData({...formData, role: 'provider'})}
              className={`p-3 rounded-xl border flex flex-col items-center justify-center transition ${
                formData.role === 'provider' 
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700 ring-1 ring-indigo-500' 
                  : 'border-gray-200 text-gray-500 hover:bg-gray-50'
              }`}
            >
              <Briefcase className="mb-2 h-6 w-6" />
              <span className="text-sm font-bold">Service Provider</span>
            </button>
          </div>

          <div className="rounded-md shadow-sm space-y-4">
            
            {/* الاسم الكامل */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="name"
                  required
                  className="pl-10 block w-full border-gray-300 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 p-2.5 outline-none"
                  placeholder="John Doe"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* الإيميل */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  className="pl-10 block w-full border-gray-300 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 p-2.5 outline-none"
                  placeholder="you@example.com"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* كلمة المرور */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  name="password"
                  required
                  className="pl-10 block w-full border-gray-300 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 p-2.5 outline-none"
                  placeholder="••••••••"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* تأكيد كلمة المرور */}
            <div className="relative">
              <label className="text-sm font-medium text-gray-700 mb-1 block">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  className="pl-10 block w-full border-gray-300 rounded-lg border focus:ring-indigo-500 focus:border-indigo-500 p-2.5 outline-none"
                  placeholder="••••••••"
                  onChange={handleChange}
                />
              </div>
            </div>

          </div>

          {/* زر التسجيل */}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
            >
              Create Account
            </button>
          </div>

          {/* رابط تسجيل الدخول */}
          <div className="text-sm text-center">
            <span className="text-gray-600">Already have an account? </span>
            <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;