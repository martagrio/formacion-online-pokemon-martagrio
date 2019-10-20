import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

		this.state = {
			pokemons: [],
			query: ''
		}

		this.getQuery = this.getQuery.bind(this);
  }

componentDidMount() {
	this.fetchPokemon();
}

getQuery (event) {
	const newQuery = event.currentTarget.value;
	this.setState({
	 query: newQuery 
	})
}

fetchPokemon() {
	const ENDPOINT = 'http://pokeapi.salestock.net/api/v2/pokemon/?limit=25';
	fetch(ENDPOINT)
	.then(response => response.json())
	.then(data => {
		for (let item of data.results) {
			fetch(item.url)
			.then(response => response.json())
			.then(data => {
				const types = [];
				for (let item of data.types) {
					types.push(item.types.name); 
				}
				const pokemon = {
					pic: data.sprites.front_default,
					name: data.name,
					id: data.id,
					types: types
				}
				this.setState({
					pokemons: [...this.state.pokemons, pokemon]
				});
			})
		}
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
					<label htmlFor="search">
						<input type="text" name="search" id="search" placeholder="Please, insert pokemon, e.g., pikachu"/>
					</label>
					<ol className="pokemons__list">
 						{
							pokemons.map(pokemon => {
								return (
									<li className="pokemon__card" key={pokemon.id}>
										<div className="card__container">
											<div className="card__upper">
												<img src={pokemon.pic} alt={pokemon.name}/>
												<p className="pokemon__id">{'ID/' + pokemon.id}</p>
											</div>
											<div className="card__lower">
												<h2 className="pokemon__name">{pokemon.name}</h2>
												<ul className="pokemon_types">
													<li className="pokemon_type" key={pokemon.id}>
														{pokemon.types.type}
													</li>
												</ul>
											</div>
										</div>
									</li>
								)
							})
						}
					</ol>
				</main>
				<footer className="app__footer">
					<h4 className="footer__copy">Copyright © 2019 POKEDEX by Marta García</h4>
				</footer>
      </div>
    );
  }
}

export default App;
