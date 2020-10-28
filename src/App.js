import React, { useState } from 'react';
import ShowMap from './Map/ShowMap';
import { filterComtext } from './context/filterComtext'
import './App.css';

function App() {

  const [value, setValue] = useState('2020')

  return (
    <filterComtext.Provider value={{ value, setValue }}>
      <ShowMap />
    </filterComtext.Provider>
  );
}

export default App;


