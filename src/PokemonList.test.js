import React from 'react';
import { mountWithProvider, updateWrapper } from './testUtils';
import PokemonList, { POKEMON_LIST_QUERY } from './PokemonList';

const graphqlMocks = [
  {
    request: {
      query: POKEMON_LIST_QUERY,
    },
    result: {
      data: {
        pokemons: Array.from({ length: 151 }, (x, index) => ({
          id: index.toString(),
          number: index.toString().padStart(3, '0'),
          name: 'PokemonName',
          image: 'pokemon.jpg',
        })),
      },
    },
  },
];

let wrapper;

beforeAll(async () => {
  wrapper = mountWithProvider(<PokemonList />, graphqlMocks);
  await updateWrapper(wrapper);
});

it('should contain all 151 Pokemon', () => {
  expect(wrapper.find('.PokemonList-item').length).toBe(151);
});
