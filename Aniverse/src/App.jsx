import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Store from './components/Store';
import Watch from './components/Watch';
import Login from './components/Login';
import User from './components/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState({ username: '', email: '' });

  const handleLogin = (userData) => {
    setUserInfo(userData);  
    setIsLoggedIn(true); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false);  
  };

  return (
    <Router>
      <Navigation isLoggedIn={isLoggedIn} handleLogout={handleLogout} userInfo={userInfo} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/store" element={<Store isLoggedIn={isLoggedIn} />} /> 
        <Route path="/watch" element={<Watch />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {isLoggedIn && <Route path="/user" element={<User userInfo={userInfo} />} />}
      </Routes>
    </Router>
  );
}

export default App;
