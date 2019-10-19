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
	console.log('hola');
} 

  render() {
		this.fetchPokemon();
    return (
      <div className="app">
      </div>
    );
  }
}

export default App;
