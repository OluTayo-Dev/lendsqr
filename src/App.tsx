import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import Users1 from './Pages/Dashboard';
import Users from './Pages/Users';
import UserDetails from './Pages/UserDetails';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import './Css/Dashboard.scss';

const App: React.FC = () => {
 

  return (
    <div className="">
      <BrowserRouter>
     
        <div className="main">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Users1 />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user-details" element={<UserDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
