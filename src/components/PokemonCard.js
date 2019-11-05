import React from 'react';
import PropTypes from 'prop-types';

const PokemonCard = ({ image, number, name }) => (
  <div className="PokemonCard">
    <img className="PokemonCard-image" src={image} alt={name} />
    <p className="PokemonCard-name">
      {number} - {name}
    </p>
  </div>
);

PokemonCard.propTypes = {
  image: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default PokemonCard;
