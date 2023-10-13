import './Card.css';

const Card = (props) => {
    const classNames = ['card'];
    classNames.push(props.className);

    return (
        <div className={classNames.join(' ').trim()}>{props.children}</div>
    )
};

export default Card;
