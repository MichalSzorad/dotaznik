import React from 'react';
import './Select.scss';

/**
 * @param {function} onChange Event will be passed when select option in this area has changed
 * @param children
 */
export const Select = ({children, onChange}) => <select className="component-select--select" onChange={onChange}>{children}</select>;

/**
 *
 * @param {String} value Value will be accessible from Select#onChange
 * @param children
 */
export const SelectOption = ({value, children}) => {
    return <option className="component-select--select-option" value={value}>{children}</option>
};