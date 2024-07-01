import React from 'react'
import './button.scss'

const Button = (props) => {
  return (
    <button className="btn">
      <a href="#">{props.name}</a>
    </button>
  );
}

export default Button