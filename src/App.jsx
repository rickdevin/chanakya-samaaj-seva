import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 1. Import Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// 2. Import Pages - MATCHING FILENAMES EXACTLY
import Home from './pages/home';
import Donate from './pages/donate'; 
import Causes from './pages/causes';
import About from './pages/about';S
import Impact from './pages/impact';
import Volunteer from './pages/volunteer';
import Contact from './pages/contact';
import Transparency from './pages/transparency';
import Success from './pages/success';
import NotFound from './pages/notFound';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        {/* pt-20 ensures content starts below the fixed navbar */}
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/causes" element={<Causes />} />
            <Route path="/about" element={<About />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/transparency" element={<Transparency />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/success" element={<Success />} />
            
            {/* Catch-all for 404 errors */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;