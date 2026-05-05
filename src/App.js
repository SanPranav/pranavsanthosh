import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BackgroundFX, Navbar, ReturnToTop } from './components';
import { Home, About, Contact, Blog, Work, Gallery } from './pages';
import BlogPost from './pages/Blog/BlogPost';
import './App.css';

function App() {
  return (
    <Router basename="/pranavsanthosh">
      <div className="app">
        <BackgroundFX />
        <Navbar />
        <ReturnToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
