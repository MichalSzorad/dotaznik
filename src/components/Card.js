import React from 'react';
import './Card.scss';

/**
 * Creates a shadowed white empty card
 */
const Card = ({children}) => {
    return <div className="component-card">
        {children}
    </div>
};

export default Card;