import React from 'react';

const Button = (props) => {
    let className = props.active ? 'active' : '';

    return (
        <li><button className={className} onClick={props.onClick}>{props.children}</button></li>
    );
};

export default Button;
