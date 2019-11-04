import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/:id">
            <PokemonDetails />
          </Route>
          <Route path="/">
            <PokemonList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
