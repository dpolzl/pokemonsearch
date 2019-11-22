import { FETCHING_DATA,
		 FETCHING_DATA_SUCCESS,
		 FETCHING_DATA_FAILURE
		} from '../constants/index'
import axiosClient from '../commons/axiosClient'

export const getData = () => {
	return {
		type : FETCHING_DATA	
	}
}

export const getDataSuccess = ( data ) => {
	return {
		type : FETCHING_DATA_SUCCESS,
 		data
	}
}

export const getDataFailure = ( data ) => {
	return {
		type : FETCHING_DATA_FAILURE
	}
}

export const fetchData = () => {

		 return dispatch => {
			axiosClient.get('/1/')
				.then(response => {
					dispatch({type: FETCHING_DATA_SUCCESS, data: {...response}})
				}) .catch(function (error) {
        			dispatch({type: FETCHING_DATA_SUCCESS, data: ''});
      			})
		}
}






