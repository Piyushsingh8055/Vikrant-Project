import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import SideNav from './components/SideNav';
import Header from './components/Header';
import Loader from './components/Loader';
import PageNotFound from './components/PageNotFound';
import Home from './components/Home';
import Sales from './components/Sales';
import Production from './components/Production';
import Purchase from './components/Purchase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // Implement your logout logic here, e.g., clearing user data or tokens.
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <div className="flex w-full h-screen bg-black">
        {isLoggedIn ? (
          <>
            <SideNav />
            <div className="flex flex-col w-full"> {/* Content container */}
              <Header />
              <div className="flex-grow bg-transparent overflow-y-auto"> {/* Center content */}
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/sales" element={<Sales />} />
                  <Route path="/production" element={<Production />} />
                  <Route path="/purchase" element={<Purchase />} />
                 
                  {/* Add more routes for other pages as needed */}
                  <Route path="*" element={<PageNotFound />} />
                </Routes>
                <button onClick={handleLogout}>Logout</button> {/* Logout button */}
              </div>
            </div>
          </>
        ) : (
          <Login onLogin={() => setIsLoggedIn(true)} />
        )}
      </div>
    </div>
  );
}

export default App;
