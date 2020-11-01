import React from 'react';

import Key from './key';

const NumberPad = () => {

  return <div id="clear_pad" >
    <Key value="7" type="number" />
    <Key value="8" type="number" />
    <Key value="9" type="number" />
    <Key value="4" type="number" />
    <Key value="5" type="number" />
    <Key value="6" type="number" />
    <Key value="1" type="number" />
    <Key value="2" type="number" />
    <Key value="3" type="number" />
    <Key value="0" type="number" />
    <Key value="." type="number" />
  </div>
}



export default NumberPad;
