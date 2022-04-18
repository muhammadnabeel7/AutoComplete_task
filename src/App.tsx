import React from 'react';
import logo from './logo.svg';
import './App.css';
import AutoComplete from './components/AutoComplete/AutoComplete';
import AutoCompleteTest from './components/AutoComplete/AutoCompleteTest';

const autoCompleteData = [
  "Asparagus",
  "Beetroot",
  "Broccoli",
  "Cabbage", 
  "Carrot", 
  "Cauliflower", 
  "Celery", 
  "Corn", 
  "Eggplant", 
  "Lettuce", 
  "Mushroom", 
  "Onion", 
  "Parsnip", 
  "Pea", 
  "Potato", 
  "Pumpkin", 
  "Radish", 
  "Spinach",    
  "Tomato", 
  "Turnip", 
]

function App() {
  return (
    <div>
      <AutoComplete id="autoComplete"  options={autoCompleteData} />
      {/* <AutoCompleteTest data={autoCompleteData}/> */}
    </div>
  );
}

export default App;
