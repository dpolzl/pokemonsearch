import React, { Component }  from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class SearchPokemons extends Component {

	constructor(props){
		super(props)
		this.state = {
			loading : false,
			pokemon : [],
			listPokemon : [],
			url : "https://pokeapi.co/api/v2/pokemon/1/",
			userSearch : "",
			setUserSearch : []
		}
	}

	handleInput = (e) => {
		this.setState( { userSearch : e.target.value })
	}

	componentDidMount(){
		this.pokemonAPI()
	}

	async pokemonAPI() {

		for (var i = 1; i <= 20; i++) {
			this.setState({ loading : true, url : "https://pokeapi.co/api/v2/pokemon/" + i })
			await axios.get(this.state.url)
				.then(res => {
					this.setState({
						pokemon : res.data.species,
						loading : false
					})	
				})

			var newArray = this.state.listPokemon.slice();    
    		newArray.push(this.state.pokemon.name);   
    		this.setState({ listPokemon : newArray })
		}

	}

	findMatches = (wordToSearch, listPokemon) => {
	    return listPokemon.filter(place => {
	        const regex = new RegExp(wordToSearch, 'gi');
	        return place.match(regex) 
	    })
	}

	mySearch = (wordToSearch, listPokemon) => {
		this.setState( { setUserSearch : '' } )
		this.setState( { setUserSearch : this.findMatches(wordToSearch, listPokemon) } )					
	}


	render() {

		if(this.state.loading){
			return(
					<div>
						<p> loading data with server </p>
					</div>
				)
		}	

		return(

				<div> 
					
					<h2 style={{ padding : "5px 100px"  }}>  Pokemon Finder </h2>
					<p  style={{ padding : "5px 100px"  }}> El que quiere pokemon, que los busque </p>		

					<div  style={{ padding : "5px 100px"  }}>
						<input type='text' 
							   placeholder="Ingrese el nombre a buscar" 
							   value={ this.state.userSearch } 
							   onChange={ this.handleInput } 
						/>
						<button onClick={ () => this.mySearch(this.state.userSearch, this.state.listPokemon) } > Buscar </button>
					</div>
					<h2  style={{ padding : "5px 100px"  }}> Resultado de la busqueda </h2>
					<p> {this.state.setUserSearch.map( (item, index) => <li style={{ listStyleType: "none", padding : "5px 100px"  }} key={index}> { item } </li>)} </p> 
					
				</div>

			)
	}

}

SearchPokemons.propTypes = {
	loading : PropTypes.bool,
	pokemon : PropTypes.array,
	url : PropTypes.string,
	handleInput : PropTypes.func,
	pokemonAPI : PropTypes.func,
	findMatches : PropTypes.func,
	mySearch : PropTypes.func
}

export default SearchPokemons
	
