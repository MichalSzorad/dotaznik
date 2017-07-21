import React, {Component} from 'react';
import './Button.scss';

/**
 * @param {function} onClick
 * @param {XML} children
 * @param {Boolean=} plain Button will be rendered without styles
 */
const Button = ({onClick, children, plain = false}) => {
    if (plain) {
        return <div className="component-button" onClick={onClick}>{children}</div>
    }
    return <div className="component-button component-button--themed" onClick={onClick}>{children}</div>
};

export default Button;