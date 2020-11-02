import React from 'react';

import "../style/key.scss";

const Key = (props) => {

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
    id={setKeyId(props)}>
    <p>{props.value}</p>
  </div>
}


export default Key;
