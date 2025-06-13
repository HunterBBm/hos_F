import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../routes/api';
import '../index.css';

export default function Salary() {
  const navigate = useNavigate();

  const [salary, setSalary] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await api.post('/salary', { salary });

      // แสดงผลลัพธ์หรือทำการนำทางไปยังหน้าที่ต้องการ
      console.log(response.data);
      navigate('/home'); // เปลี่ยนเส้นทางไปยังหน้า home หลังบันทึกสำเร็จ
    } catch (err: any) {
      console.error(err);
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError('Failed to save salary. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-800 via-violet-700 to-pink-600 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Salary Input</h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="salary" className="block mb-2 font-medium text-gray-700">
              Salary
            </label>
            <input
              type="number"
              id="salary"
              value={salary}
              onChange={e => setSalary(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
            {loading ? 'Saving...' : 'Save Salary'}
            </button>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate('/home')}
            className="text-blue-600 hover:underline"
          >
            Back to Home
          </button>         
        </div>
      </div>
    </div>
    );
}
  




