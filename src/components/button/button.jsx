import React from 'react';
import './button.css';

const Button = (props) => {
    const {type, text, onClick} = props;
  return (
    <div className={type} onClick={onClick? onClick: ()=>console.log("No call back function!")} >{text}</div>
  )
}

export default Button