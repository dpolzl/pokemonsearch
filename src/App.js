import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore/configureStore'
import SearchPokemons from './component/pokemon/SearchPokemons'


const store = configureStore()

const App = () => (  

		<Provider store = { store }>
			<SearchPokemons />
		</Provider>

)  

export default App