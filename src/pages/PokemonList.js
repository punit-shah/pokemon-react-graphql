import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import PokemonCard from '../components/PokemonCard';
import Container from '../components/Container';
import Message from '../components/Message';
import './PokemonList.css';

export const POKEMON_LIST_QUERY = gql`
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

  if (error) {
    return (
      <Message>Error</Message>
    );
  }
  if (loading) {
    return (
      <Message>Loading...</Message>
    );
  }

  const listItems = data.pokemons.map(pokemon => (
    <li key={pokemon.id} className="PokemonList-item">
      <PokemonCard {...pokemon} />
    </li>
  ));

  return (
    <Container className="PokemonList">
      <ul>{listItems}</ul>
    </Container>
  );
};

export default PokemonList;
