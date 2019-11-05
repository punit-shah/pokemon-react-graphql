import React from 'react';
import { mountWithProvider, updateWrapper } from './testUtils';
import PokemonDetails, { POKEMON_DETAILS_QUERY } from './PokemonDetails';

const mockId = 'pikachu';
const graphqlMocks = [
  {
    request: {
      query: POKEMON_DETAILS_QUERY,
      variables: {
        id: mockId,
      },
    },
    result: {
      data: {
        pokemon: {
          image: 'https://img.pokemondb.net/artwork/pikachu.jpg',
          number: '025',
          name: 'Pikachu',
          types: ['Electric'],
          resistant: ['Electric', 'Flying', 'Steel'],
          weaknesses: ['Ground'],
        },
      },
    },
  },
];

let wrapper;

beforeAll(async () => {
  wrapper = mountWithProvider(<PokemonDetails id={mockId} />, graphqlMocks);
  await updateWrapper(wrapper);
});

it('displays an image of the Pokemon', () => {
  expect(wrapper.find('img').prop('src')).toBe(
    'https://img.pokemondb.net/artwork/pikachu.jpg'
  );
});

it("displays the Pokemon's number", () => {
  expect(wrapper.text()).toContain('025');
});

it("displays the Pokemon's name", () => {
  expect(wrapper.text()).toContain('Pikachu');
});

it("displays a list of the Pokemon's types", () => {
  expect(
    wrapper.containsMatchingElement(
      <ul>
        <li>Electric</li>
      </ul>
    )
  ).toBe(true);
});

it('displays a list of what the Pokemon is resistant to', () => {
  expect(
    wrapper.containsMatchingElement(
      <ul>
        <li>Electric</li>
        <li>Flying</li>
        <li>Steel</li>
      </ul>
    )
  ).toBe(true);
});

it('displays a list of the Pokemon\'s weaknesses', () => {
  expect(
    wrapper.containsMatchingElement(
      <ul>
        <li>Ground</li>
      </ul>
    )
  ).toBe(true);
});
