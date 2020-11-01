import React from 'react';

import Key from './key';

import "../style/clear_pad.scss";


const ClearPad = () => {

  return <div id="clear_pad" >
    <Key value="C" type="clear" />
    <Key value="AC" type="clear" />
  </div>
}



export default ClearPad;
