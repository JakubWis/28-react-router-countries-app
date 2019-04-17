import * as actionTypes from '../actions/actions';
import countriesData from '../data/countries.json';


const initialState = {
    countries: countriesData
}

const countriesReducer = (state = initialState, action) => {
    switch ( action.type ) {
        case actionTypes.GET_COUNTRIES: 
            return {
                ...state,
                countries: state.countries
            }
        /*
        case actionTypes.GET_COUNTRY:
            return {
                id: action.id
            }
        case actionTypes.DELETE_COUNTRY:
            return {
                id: action.id;
            }
        case actionTypes.SEARCH_COUNTRIES:
            return {
                searchText: action.searchText
            }
        case actionTypes.SET_CONTINENT:
            return {
                name: action.name
            }
        */
    }
    return state;
};

export default countriesReducer;