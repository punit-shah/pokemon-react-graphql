import React from 'react';
import { mount } from 'enzyme';
import PokemonCard from './PokemonCard';

const image = 'https://img.pokemondb.net/artwork/pikachu.jpg';
const number = '025';
const name = 'Pikachu';

let wrapper;

beforeAll(() => {
  wrapper = mount(
    <PokemonCard id="pikachu" image={image} number={number} name={name} />
  );
});

it('should display an image of the Pokemon', () => {
  expect(wrapper.find('img').prop('src')).toBe(image);
});

it("should display the Pokemon's number", () => {
  expect(wrapper.text()).toContain(number);
});

it("should display the Pokemon's name", () => {
  expect(wrapper.text()).toContain(name);
});
