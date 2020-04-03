import React from 'react';
import './App.css';
import Listing from './components/Listing.jsx';
import etsy from './etsy.json';

function App() {
  return (
    <Listing items={etsy} />
  );
}

export default App;
