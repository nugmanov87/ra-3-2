import React from 'react';
import './App.css';
import Listing from './components/Listing.jsx';
import Etsy from './etsy.json';

function App() {
  return (
    <Listing items={Etsy} />
  );
}

export default App;
