import React from 'react';
import './Button.component.css'
const Button = (props) => {
        return <button className="button" onClick = {props.onClick}>{props.caption}</button>
        }
export default Button;
