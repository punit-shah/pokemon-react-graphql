import React from 'react';

const PokemonCard = ({ image, number, name }) => (
  <div className="PokemonCard">
    <img className="PokemonCard-image" src={image} alt={name} />
    <p className="PokemonCard-name">{number} - {name}</p>
  </div>
);

export default PokemonCard;
