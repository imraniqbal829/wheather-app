// src/App.js

import React from 'react';
import Header from './components/Header/header';
import Banner from './components/Banner/banner.tsx';
import Forecast from './components/Forecast/forecast.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Forecast />
    </div>
  );
}

export default App;
