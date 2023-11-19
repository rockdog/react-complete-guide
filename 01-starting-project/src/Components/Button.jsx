import React from 'react';

const Button = ({children, ...attributes}) => {
    return (
        <li>
            <button {...attributes}>
                {children}
            </button>
        </li>
    );
};

export default Button;
