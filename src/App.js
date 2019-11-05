import React from 'react';
import { Router } from '@reach/router';
import PokemonList from './pages/PokemonList';
import PokemonDetails from './pages/PokemonDetails';

const App = () => (
  <div className="App">
    <Router>
      <PokemonList path="/" />
      <PokemonDetails path="/:id" />
    </Router>
  </div>
);

export default App;
