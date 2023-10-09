import './ConceptList.css';
import ConceptItem from "./ConceptItem";

const ConceptList = (props) => {
    return (
        <ul id="concepts">
            {
                props.concepts.map(
                    (concept) => <ConceptItem concept={concept} key={concept.id} />
                )
            }
        </ul>
    )
};

export default ConceptList;
