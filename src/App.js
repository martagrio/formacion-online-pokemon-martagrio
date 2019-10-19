import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			pokemons: {}
		}
  }

fetchPokemon() {
	const ENDPOINT = 'http://pokeapi.salestock.net/api/v2/';
	fetch(ENDPOINT)
	.then(response => response.json())
	.then(data => fetch(data.pokemon))
	.then(pokemons => pokemons.json())
	.then(pokemons => console.log(pokemons.results))
}

  render() {
		this.fetchPokemon();
    return (
      <div className="app">
				<label htmlFor="search">Please, introduce the name of a pokemon:</label>
				<input type="text" name="search" id="search"/>
      </div>
    );
  }
}

export default App;
