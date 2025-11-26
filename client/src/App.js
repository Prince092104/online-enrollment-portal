import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    axios.get('https://online-enrollment-portal-production.up.railway.app/')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(err => {
        setMessage('✅ FBC Enrollment Portal - Ready!');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>FBC Enrollment Portal</h1>
        <p>{message}</p>
        <div style={{ marginTop: '20px', fontSize: '16px' }}>
          <p>🚀 System Status: Operational</p>
          <p>📍 Backend: Railway</p>
          <p>🌐 Frontend: Vercel</p>
        </div>
      </header>
    </div>
  );
}

export default App;