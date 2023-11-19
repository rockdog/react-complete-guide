import React from 'react';
import Concept from './Concept.jsx';
import Section from './Section.jsx';
import { CONCEPTS } from '../data.js';


const Concepts = () => {
    return (
        <Section id='core-concepts' title='Core Concepts'>
            <ul>
                {CONCEPTS.map(concept => <Concept key={concept.title} {...concept} />)}
            </ul>
        </Section>
    )
};

export default Concepts;
