import React, { useState } from 'react';
import Button from './Button.jsx';
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
import { EXAMPLES } from '../data.js';

const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState('components');

    const buttonClickHandler = (topic) => {
        setSelectedTopic(topic);
    };

    return (
        <Section id='examples' title='Examples'>
            <Tabs tabs={
                <>
                    <Button
                        className={selectedTopic === 'components' ? 'active' : ''}
                        onClick={() => buttonClickHandler('components')}
                    >
                        Components
                    </Button>
                    <Button
                        className={selectedTopic === 'jsx' ? 'active' : ''}
                        onClick={() => buttonClickHandler('jsx')}
                    >
                        JSX
                    </Button>
                    <Button
                        className={selectedTopic === 'props' ? 'active' : ''}
                        onClick={() => buttonClickHandler('props')}
                    >
                        Props
                    </Button>
                    <Button
                        className={selectedTopic === 'state' ? 'active' : ''}
                        onClick={() => buttonClickHandler('state')}
                    >
                        State
                    </Button>
                </>
            }>
                <div id='tab-content'>
                    <h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>{EXAMPLES[selectedTopic].code}</code>
                    </pre>
                </div>
            </Tabs>
        </Section>
    );
};

export default Examples;
