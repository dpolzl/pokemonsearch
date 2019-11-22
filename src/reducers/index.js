import { combineReducers } from 'redux'
import pokemonReducer from './pokemonReducer'

const reducer = combineReducers({
	data : pokemonReducer
})

export default reducer