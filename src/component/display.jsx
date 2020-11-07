import React, {useContext} from 'react';
import {Context} from '../Store';

import '../style/display.scss';

const Display = () => {
  const [state] = useContext(Context);

  const showOutput = () => {
    return (state.isCalculation ? state.calculation : state.equation);
  }

  return <div id="display">
    <h1 id="display_output">{showOutput()}</h1>
  </div>
}


export default Display;
