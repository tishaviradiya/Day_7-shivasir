import { useState, useEffect } from 'react';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <header className="Header">
        <h1>Product Catalog</h1>
      </header>
      <main className="Main">
        <Home />
      </main>
    </div>
  );
}

export default App;
