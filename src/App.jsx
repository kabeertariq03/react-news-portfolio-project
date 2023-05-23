import React from 'react';
import News from './News.jsx';
import Navbar from './Navbar';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='container my-3'>
        <Routes>
          <Route exact path='/' element={<News key="general" country="us" category="general" />} />
          <Route exact path='/business' element={<News key="business" country="us" category="business" />} />
          <Route exact path='/entertainment' element={<News key="entertainment" country="us" category="entertainment" />} />
          <Route exact path='/health' element={<News key="health" country="us" category="health" />} />
          <Route exact path='/science' element={<News key="science" country="us" category="science" />} />
          <Route exact path='/technology' element={<News key="technology" country="us" category="technology" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
