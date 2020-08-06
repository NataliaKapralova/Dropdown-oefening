import React from 'react';
import './App.scss';
import Dropdown from "./Dropdown"

const items = [
  {
    id: 1,
    value: "Blue"
  },
  {
    id: 2,
    value: "Green"
  },
  {
    id: 3,
    value: "Red"
  },
]


function App() {
  return (
    <div>
      <h1> Drop down menu</h1>
      <Dropdown items={items} />

      {/* Test versie met multiselect */}

      <h1> Test multiselect </h1>
      <Dropdown items={items} multiselect />
    </div>
  );
}

export default App;
