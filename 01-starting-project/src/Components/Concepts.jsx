import React from 'react';
import Concept from './Concept.jsx';
import { CONCEPTS } from '../data.js';


const Concepts = () => {
    return (
        <section id='core-concepts'>
            <h2>Core Concepts</h2>
            <ul>
                {CONCEPTS.map(concept => <Concept key={concept.title} {...concept} />)}
            </ul>
        </section>
    )
};

export default Concepts;
