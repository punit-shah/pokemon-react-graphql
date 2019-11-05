import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Link } from '@reach/router';
import Container from '../components/Container';
import './PokemonDetails.css';

export const POKEMON_DETAILS_QUERY = gql`
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

  const {
    pokemon: { image, number, name, types, resistant, weaknesses },
  } = data;

  return (
    <Container className="PokemonDetails-container" centered>
      <div className="PokemonDetails">
        <div className="PokemonDetails-image">
          <img src={image} alt={name} />
        </div>
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
                <ul className="PokemonDetails-list">
                  {types.map(type => (
                    <li className="PokemonDetails-tag" key={type}>{type}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">Resistant to:</th>
              <td>
                <ul className="PokemonDetails-list">
                  {resistant.map(resistance => (
                    <li className="PokemonDetails-tag" key={resistance}>{resistance}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">Weak to:</th>
              <td>
                <ul className="PokemonDetails-list">
                  {weaknesses.map(weakness => (
                    <li className="PokemonDetails-tag" key={weakness}>{weakness}</li>
                  ))}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to="/" className="PokemonDetails-back-link">Back to all Pokemon</Link>
      </div>
    </Container>
  );
};

PokemonDetails.propTypes = {
  id: PropTypes.string,
};

export default PokemonDetails;
