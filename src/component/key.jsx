import React, {useContext} from 'react';
import {Context} from '../Store';

import "../style/key.scss";

const Key = (props) => {
  const [state, dispatch] = useContext(Context);

  const handleClick = () => {
    dispatch({ type: 'INPUT_KEYS', payload: props.value})
  }

  const setKeyId = () => {
    let result;
    if (props.type === "number") {
      if (props.value === ".") {
        result = "numdot"
      }
      else result = `num${props.value}`
    }
    else if (props.type === "clear") {
      result = `clear${props.value}`
    }
    return result;
  }

  return <div
    className={`key ${props.type}_key`}
    id={setKeyId(props)}
    onClick={handleClick}
    >
    <p>{props.value}</p>
  </div>
}


export default Key;
