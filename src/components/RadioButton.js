import React, {Component} from 'react';
import './RadioButton.scss';

/**
 * RadioButton
 * use radio buttons with the same name to make them work how they are supposed to.
 * @param {String} name
 * @param {String} label
 * @param {String} id
 * @param {Boolean=} defaultChecked
 */
const RadioButton = ({name, defaultChecked = false, label = '', id = ''}) => {
    return <div className="component-radiobutton--wrapper">
        <input className="component-radiobutton--input" type="radio" name={name} id={id} defaultChecked={defaultChecked}/>
        <label className="component-radiobutton--label"  htmlFor={id}>{label}</label>
    </div>;
};
export default RadioButton;