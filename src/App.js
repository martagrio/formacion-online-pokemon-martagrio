import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			pokemons: []
		}
  }

componentDidMount() {
	this.fetchPokemon();
}

fetchPokemon() {
	const ENDPOINT = 'http://pokeapi.salestock.net/api/v2/';
	fetch(ENDPOINT)
	.then(response => response.json())
	.then(data => {
	  const limit = '?limit=';
	 	const pokeNumber = '25';
		return(
			fetch(data.pokemon + limit + pokeNumber)
		)
	})
	.then(pokemons => pokemons.json())
	.then(pokemons => {
		console.log(pokemons.results);
		this.setState({
			pokemons: pokemons.results
		})
	})
}

  render() {
		const {pokemons} = this.state;
    return (
      <div className="app">
				<header className="app__header">
					<h1 className="header__title">pokedex</h1>
				</header>
				<main className="app__main">
					<label htmlFor="search">Please, introduce the name of a pokemon:</label>
					<input type="text" name="search" id="search"/>
					<ol className="pokemons__list">
						{
							pokemons.map((pokemon, index) => {
								return (
									<li className="pokemon__card" key={index + 1}>
										<div className="card__container">
											<img src="" alt={pokemon.name}/>
											<h2 className="pokemon__name">{pokemon.name}</h2>
											<p className="pokemon__id">{'ID/' + (index + 1)}</p>
											<ul className="pokemon_types">
												<li className="pokemon_type">
													paco
												</li>
											</ul>
										</div>
									</li>
								)
							})
						}
					</ol>
				</main>
				<footer className="app__footer">

				</footer>
      </div>
    );
  }
}

export default App;
