import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const POKEMON_DETAILS_QUERY = gql`
  query getPokemon($id: String!) {
    pokemon(id: $id) {
      image
      number
      name
      types
      resistant
      weaknesses
    }
  }
`;

const PokemonDetails = ({ id }) => {
  const { loading, error, data } = useQuery(POKEMON_DETAILS_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { pokemon: { image, number, name, types, resistant, weaknesses } } = data;

  return (
    <div className="PokemonDetails">
      <img className="PokemonDetails-image" src={image} alt={name} />
      <h2 className="PokemonDetails-name">{name}</h2>
      <table className="PokemonDetails-table">
        <tbody>
          <tr>
            <th scope="row">Number</th>
            <td>{number}</td>
          </tr>
          <tr>
            <th scope="row">Types</th>
            <td>
              <ul>
                {types.map(type => <li key={type}>{type}</li>)}
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Resistant to:</th>
            <td>
              <ul>
                {resistant.map(resistance => <li key={resistance}>{resistance}</li>)}
              </ul>
            </td>
          </tr>
          <tr>
            <th scope="row">Weak to:</th>
            <td>
              <ul>
                {weaknesses.map(weakness => <li key={weakness}>{weakness}</li>)}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PokemonDetails;
