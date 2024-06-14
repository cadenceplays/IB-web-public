import React from 'react';
import "./line.css";

const Line = (props) => {
  const {color, width} = props;

  // const lineStyle = {
  //   display: "flex",
  //   width: `${width}`,
  //   height: "1px",
  //   border: "0",
  //   margin: "0.35rem 0",
  //   background: `var(${color})`, 
  // };

  const lineStyle = {
    width: `${width}`,
    borderColor: `var(${color})`, 
  };

  return (
    <div style={lineStyle} className="line">
    </div>
  )
}

export default Line