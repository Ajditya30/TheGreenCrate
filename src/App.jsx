import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Journey from './pages/Journey';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journey" element={<Journey />} />
            {/* Add other routes as they're developed */}
            <Route path="/research" element={<div className="p-20">Research Page (Coming Soon)</div>} />
            <Route path="/team" element={<div className="p-20">Team Page (Coming Soon)</div>} />
            <Route path="/impact" element={<div className="p-20">Impact Page (Coming Soon)</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App; 