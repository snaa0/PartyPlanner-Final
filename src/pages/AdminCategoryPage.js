import React, { useState } from 'react';
import { categories as initialCategories } from '../data'; // نبدأ بالبيانات الموجودة
import { Plus, Trash2, Edit, Save, X } from 'lucide-react';

const AdminCategoryPage = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [isAdding, setIsAdding] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '', icon: '', count: '0 providers' });

  // دالة حذف فئة
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter(cat => cat._id !== id));
    }
  };

  // دالة إضافة فئة جديدة
  const handleAdd = (e) => {
    e.preventDefault();
    const newId = (categories.length + 1).toString();
    const categoryToAdd = { ...newCategory, _id: newId };
    setCategories([...categories, categoryToAdd]);
    setIsAdding(false);
    setNewCategory({ name: '', icon: '', count: '0 providers' });
    alert("Category added successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* العنوان والزر */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Category Management</h1>
            <p className="text-gray-500 mt-1">Add, edit, or remove service categories dynamically</p>
          </div>
          <button 
            onClick={() => setIsAdding(true)}
            className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
          >
            <Plus size={20} />
            Add Category
          </button>
        </div>

        {/* نموذج إضافة فئة (يظهر عند الضغط على الزر) */}
        {isAdding && (
          <div className="bg-white p-6 rounded-2xl shadow-md border border-indigo-100 mb-8 animate-fade-in">
            <h3 className="font-bold text-lg mb-4">Add New Category</h3>
            <form onSubmit={handleAdd} className="flex gap-4 items-end">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:border-indigo-500"
                  placeholder="e.g. Florists"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                />
              </div>
              <div className="w-24">
                <label className="block text-sm font-medium text-gray-700 mb-1">Icon (Emoji)</label>
                <input 
                  type="text" 
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg outline-none focus:border-indigo-500 text-center"
                  placeholder="🌹"
                  value={newCategory.icon}
                  onChange={(e) => setNewCategory({...newCategory, icon: e.target.value})}
                />
              </div>
              <button type="submit" className="bg-green-600 text-white p-2.5 rounded-lg hover:bg-green-700 transition">
                <Save size={20} />
              </button>
              <button 
                type="button" 
                onClick={() => setIsAdding(false)}
                className="bg-gray-200 text-gray-600 p-2.5 rounded-lg hover:bg-gray-300 transition"
              >
                <X size={20} />
              </button>
            </form>
          </div>
        )}

        {/* جدول الفئات */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="p-4 text-sm font-semibold text-gray-600">Icon</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Category Name</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Providers Count</th>
                <th className="p-4 text-sm font-semibold text-gray-600 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {categories.map((cat) => (
                <tr key={cat._id} className="hover:bg-gray-50 transition">
                  <td className="p-4 text-2xl">{cat.icon}</td>
                  <td className="p-4 font-medium text-gray-900">{cat.name}</td>
                  <td className="p-4 text-sm text-gray-500">{cat.count}</td>
                  <td className="p-4 text-right space-x-2">
                    <button className="text-blue-600 hover:text-blue-800 p-1 hover:bg-blue-50 rounded transition">
                      <Edit size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(cat._id)}
                      className="text-red-500 hover:text-red-700 p-1 hover:bg-red-50 rounded transition"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default AdminCategoryPage;