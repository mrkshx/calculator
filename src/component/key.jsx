import React, {useContext} from 'react';
import {Context} from '../Store';

import "../style/key.scss";

const Key = (props) => {
  const [state, dispatch] = useContext(Context);

  const calc = (expression) => {
    switch(expression.groups.operator) {
      case "+":
        return (expression.groups.num1+expression.groups.num2);
      case "-":
        return (expression.groups.num1-expression.groups.num2);
      case "x":
        return (expression.groups.num1*expression.groups.num2);
      case ":":
        return (expression.groups.num1/expression.groups.num2);
      default: return 0;
    }
  }

  const handleClick = () => {

    switch(props.type){
      case 'number':
        if (state.firstInput === true) {
          dispatch({ type: 'REMOVE_LEADING_ZERO' });
        }
        dispatch({ type: 'INPUT_KEYS', payload: props.value});
        break;
      case 'operator':
        if (props.value !== '=') {
          if (state.firstInput === true) {
            dispatch({ type: 'REMOVE_LEADING_ZERO' });
          }
          dispatch({ type: 'INPUT_KEYS', payload: props.value});
        }
        else if (props.value === '=') {
          const expression = state.output.match(/^(?<num1>\d*\.?\d*)(?<operator>[+-x:]?)(?<num2>\d*\.?\d*)$/);
          if (expression.groups.operator.length !== 0) {
            expression.groups.num1 = Number(expression.groups.num1);
            expression.groups.num2 = Number(expression.groups.num2);
            console.log(expression);
            dispatch({ type: 'CALCULATE', payload: calc(expression).toFixed(3)});
          }
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

  const setKeyColor = () => {
    let key_backgroundcolor = "";
    let key_color = "";
    if (props.type === 'number') {
      key_backgroundcolor = "white";
    } else if ((props.type === 'operator') && (props.value !== '='))  {
      key_backgroundcolor = "#DF8601";
    } else if (props.type === 'operator') {
      key_backgroundcolor = "black";
      key_color = "white";
    } else {
      key_backgroundcolor = "red";
    }
    const Colors = {
      backgroundColor: key_backgroundcolor,
      color: key_color
    }
    return Colors;
  }

  return <div
    className={`key ${props.type}_key`}
    id={setKeyId(props)}
    onClick={handleClick}
    style={setKeyColor(props)}
    >
    <p>{props.value}</p>
  </div>
}


export default Key;
