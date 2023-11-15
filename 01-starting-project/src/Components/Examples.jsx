import React, { useState } from 'react';
import Button from './Button.jsx';

const Examples = () => {
    const [exampleHeader, setExampleHeader] = useState('Components');
    const [exampleCode, setExampleCode] = useState('Components Code');
    const [activeButton, setActiveButton] = useState('Components');

    const buttonClickHandler = (header, code) => {
        setExampleHeader(header);
        setExampleCode(code);
        setActiveButton(header);
    };

    return (
        <section id='examples'>
            <h2>Examples</h2>
            <menu>
                <Button active={activeButton === 'Components'} onClick={() => buttonClickHandler('Components', 'Components Code')}>Components</Button>
                <Button active={activeButton === 'JSX'} onClick={() => buttonClickHandler('JSX', 'JSX Code')}>JSX</Button>
                <Button active={activeButton === 'Props'} onClick={() => buttonClickHandler('Props', 'Props Code')}>Props</Button>
                <Button active={activeButton === 'State'} onClick={() => buttonClickHandler('State', 'State Code')}>State</Button>
            </menu>
            <div id='tab-content'>
                <h3>{exampleHeader}</h3>
                <code>{exampleCode}</code>
            </div>
        </section>
    );
};

export default Examples;
