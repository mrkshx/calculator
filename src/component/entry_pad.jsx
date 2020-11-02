import React from 'react';

import ClearPad from './clear_pad';
import NumberPad from './number_pad';
import OperatorPad from './operator_pad';

import "../style/entry_pad.scss";

const EntryPad = () => {

  return <div id="entry_pad" >
    <ClearPad/>
    <NumberPad/>
    <OperatorPad/>
  </div>
}


export default EntryPad;
