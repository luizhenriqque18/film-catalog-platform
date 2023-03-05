import React from "react";
import "../../css/Card.css";
import PropTypes from 'prop-types';
const Card = (props) => {
    return (
        <div className="card__container">
            <div className="card__body">
                <img className="cart__image" src={props.image} alt={props.title} />
                <p className="card__text">{props.description}</p>
            </div>
            <div className="card__header">
                <h2 className="card__title">{props.title}</h2>
            </div>
        </div>
    );
}

Card.defaultProps = {
    title: '',
    description: '',
    image: ''
}
Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string
}

export default Card;