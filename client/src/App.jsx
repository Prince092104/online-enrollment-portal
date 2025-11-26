import React, { useEffect, useState } from 'react';
import Navbar from './components/common/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
  const [backendStatus, setBackendStatus] = useState('Checking...');

  useEffect(() => {
    // Test backend connection
    fetch('https://online-enrollment-portal-production.up.railway.app/')
      .then(response => response.json())
      .then(data => {
        setBackendStatus('✅ Backend Connected');
      })
      .catch(error => {
        setBackendStatus('❌ Backend Connection Failed');
      });
  }, []);

  return (
    <div className="App">
      <Navbar />
      
      {/* Backend Status Banner */}
      <div className="bg-gray-100 py-2 text-center text-sm">
        System Status: {backendStatus} | 
        Frontend: ✅ Vercel | 
        Database: ✅ MongoDB
      </div>
      
      <Home />
    </div>
  );
}

export default App;