import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import './PokemonCard.css';

const PokemonCard = ({ id, image, number, name }) => (
  <Link to={`/${id}`} className="PokemonCard">
    <div className="PokemonCard-image">
      <img src={image} alt={name} />
    </div>
    <p className="PokemonCard-number">{number}</p>
    <p className="PokemonCard-name">{name}</p>
  </Link>
);

PokemonCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PokemonCard;
