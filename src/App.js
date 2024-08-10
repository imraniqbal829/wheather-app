// src/App.js

import React from 'react';
import Header from './components/Header/header';
import Banner from './components/Banner/banner.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
