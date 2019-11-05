import React from 'react';
import { Router } from '@reach/router';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <PokemonList path="/" />
        <PokemonDetails path="/:id" />
      </Router>
    </div>
  );
}

export default App;
