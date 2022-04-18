import React from 'react';
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
  "Spinach",    
  "Turnip", 
]

function App() {
  return (
    <div>
      <AutoComplete id="autoComplete" onChange={(e)=>console.log(e.target.value)}  data={autoCompleteData} />
    </div>
  );
}

export default App;
