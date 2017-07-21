import React from 'react';

/**
 *
 * @param {String} name
 * @param {String} color
 * @param {Number} size
 */
const Icon = ({name = '', color, size}) => {
    const styles = {color, fontSize: size};
    return (<i className={`icon fa fa-${name}`} style={styles}/>);
};
export default Icon;