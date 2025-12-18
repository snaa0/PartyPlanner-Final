import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { listings } from '../data';
import { MapPin, Star, Phone, User, ArrowLeft, CheckCircle } from 'lucide-react';

const ListingDetails = () => {
  // 1. جلب الآيدي من الرابط
  const { id } = useParams();
  
  // 2. البحث عن الخدمة المطابقة للآيدي
  const service = listings.find((item) => item._id === id);

  // إذا لم يتم العثور على الخدمة (حماية للكود)
  if (!service) {
    return <div className="text-center py-20">Service not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-6">
        
        {/* زر العودة للخلف */}
        <Link to="/services" className="inline-flex items-center text-gray-500 hover:text-indigo-600 mb-6 transition">
          <ArrowLeft size={20} className="mr-2" />
          Back to Services
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* القسم الأيمن: الصورة */}
            <div className="h-64 lg:h-auto relative bg-gray-200">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-indigo-600 shadow-sm">
                {service.category}
              </div>
            </div>

            {/* القسم الأيسر: التفاصيل */}
            <div className="p-8 lg:p-12">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star size={18} fill="currentColor" />
                      <span className="font-bold text-gray-800 text-base">{service.rating}</span>
                      <span className="text-gray-400">({service.reviews} reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={18} />
                      {service.location}
                    </div>
                  </div>
                </div>
                
                {/* السعر */}
                <div className="text-right">
                  <p className="text-sm text-gray-400 mb-1">Price</p>
                  <p className="text-2xl font-bold text-indigo-600">
                    {service.hasFixedPrice ? `$${service.price}` : 'Contact'}
                  </p>
                </div>
              </div>

              <hr className="border-gray-100 my-6" />

              {/* الوصف */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-3">About this Service</h3>
                <p className="text-gray-600 leading-relaxed">
                  {/* هنا نستخدم وصف افتراضي إذا كان الوصف قصيراً في البيانات */}
                  {service.description || "Experience top-tier service tailored to your needs. We ensure professionalism and quality in every detail of your event."}
                </p>
                
                {/* ميزات إضافية (شكلية) */}
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500" /> Professional Staff
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle size={16} className="text-green-500" /> Modern Equipment
                  </div>
                </div>
              </div>

              {/* بطاقة التواصل (المزود) */}
              <div className="bg-indigo-50 rounded-2xl p-6 border border-indigo-100">
                <h3 className="text-sm font-bold text-indigo-900 uppercase tracking-wide mb-4">Service Provider</h3>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-indigo-200 rounded-full flex items-center justify-center text-indigo-700">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{service.user.name}</p>
                    <p className="text-sm text-gray-500">Verified Provider</p>
                  </div>
                </div>

                {/* زر الاتصال - يظهر الرقم بوضوح */}
                <a 
                  href={`tel:${service.user.phone}`} 
                  className="flex items-center justify-center gap-3 w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
                >
                  <Phone size={24} />
                  Call: {service.user.phone}
                </a>
                <p className="text-center text-xs text-gray-400 mt-3">
                  Mention "PartyPlanner" when you call for the best deal!
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;