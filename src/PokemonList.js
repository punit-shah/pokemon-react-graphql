import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from '@reach/router';
import PokemonCard from './PokemonCard';

const POKEMON_LIST_QUERY = gql`
  {
    pokemons(first: 151) {
      id
      number
      name
      image
    }
  }
`;

const PokemonList = () => {
  const { loading, error, data } = useQuery(POKEMON_LIST_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const listItems = data.pokemons.map(pokemon => (
    <li key={pokemon.id} className="PokemonList-item">
      <Link to={`/${pokemon.id}`} className="PokemonList-link">
        <PokemonCard {...pokemon} />
      </Link>
    </li>
  ));

  return <ul>{listItems}</ul>
}

export default PokemonList;
