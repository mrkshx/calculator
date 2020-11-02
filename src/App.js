import React from 'react';
import Store from './Store';


import './App.scss';
import Calculator from './component/calculator';

function App() {
  return (
    <div className="App">
      <Store>
        <Calculator/>
      </Store>
    </div>
  );
}

export default App;
