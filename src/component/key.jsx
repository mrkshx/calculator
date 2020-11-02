import React, {useContext} from 'react';
import {Context} from '../Store';

import "../style/key.scss";

const Key = (props) => {
  const [state, dispatch] = useContext(Context);

  const handleClick = () => {

    switch(props.type){
      case 'number':
        dispatch({ type: 'INPUT_KEYS', payload: props.value});
        break;
      case 'operator':
        if (props.value !== '=') {
          dispatch({ type: 'INPUT_KEYS', payload: props.value});
        }
        break;
      case 'clear':
        if (props.value === 'AC') {
          dispatch({ type: 'RESET_DISPLAY', payload: "0"})
        }
        else if (props.value === 'C') {
          dispatch({ type: 'UNDO_LAST_INPUT' })
        }
        break;
      default: return "";
    };
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
