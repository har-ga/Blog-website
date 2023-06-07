import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import BlogPost from './components/BlogPost';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/blog/:id" element={<BlogPost/>} />
          <Route element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
