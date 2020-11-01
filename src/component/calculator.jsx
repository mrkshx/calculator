import React from 'react';

import Display from './display';
import EntryPad from './entry_pad';

import "../style/calculator.scss";

const Calculator = () => {
  return <div id="calculator">
    <Display/>
    <EntryPad/>
  </div>
}


export default Calculator;
