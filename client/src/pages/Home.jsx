import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [backendMessage, setBackendMessage] = useState('Loading...');

  useEffect(() => {
    axios.get('https://online-enrollment-portal-production.up.railway.app/')
      .then(response => {
        setBackendMessage(response.data.message);
      })
      .catch(err => {
        setBackendMessage('Backend connection issue');
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">
            Welcome to FBC Enrollment Portal
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {backendMessage}
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
          
          {/* System Status */}
          <div className="mt-12 p-6 bg-white rounded-lg shadow-md max-w-md mx-auto">
            <h3 className="text-lg font-semibold mb-4">System Status</h3>
            <div className="text-left space-y-2">
              <p>🌐 Frontend: <span className="text-green-600">Operational</span></p>
              <p>🔧 Backend: <span className="text-green-600">Connected</span></p>
              <p>🗄️ Database: <span className="text-green-600">Online</span></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;