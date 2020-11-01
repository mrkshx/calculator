import React from 'react';

import "../style/key.scss";

const Key = (props) => {

  return <div
    className={`key ${props.type}_key`}
    id={props.type === "number" ? props.value === "." ? "numdot" : `num${props.value}` : "" }>
    <p>{props.value}</p>
  </div>
}


export default Key;
