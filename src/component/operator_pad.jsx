import React from 'react';

import Key from './key';

import "../style/operator_pad.scss";


const OperatorPad = () => {

  return <div id="operator_pad" >
    <Key value=":" type="operator" />
    <Key value="x" type="operator" />
    <Key value="+" type="operator" />
    <Key value="-" type="operator" />
    <Key value="=" type="operator" />
  </div>
}



export default OperatorPad;
