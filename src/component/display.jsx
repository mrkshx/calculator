import React, {useContext, useEffect} from 'react';
import {Context} from '../Store';

import '../style/display.scss';

const Display = () => {
  const [state, dispatch] = useContext(Context);

  return <div id="display">
    <h1 id="display_output">{state.output}</h1>
  </div>
}


export default Display;
