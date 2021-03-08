import React from 'react';
import "./Button.css";

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
};

const isEqual = val => {
    return val !== "=";
};

export const Button = props => (
    <div 
        className={`button-wrapper 
            ${isOperator(props.children) ? null : "operator"} 
            ${isEqual(props.children) ? null : "eql"}`
        } 
        onClick={() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
);
    
