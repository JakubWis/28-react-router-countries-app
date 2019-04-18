import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import * as actionTypes from '../actions/actions';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props.countries);
        //this.props.onGetCountries();
    }

    render() {
        return (
            <div>
                <h1>hej</h1>
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log('hello')
    console.log(state)
    return {
        countries: []
    };
};
/* 
const mapDispatchToProps = dispatch => {
    return {
        onGetCountries: () => dispatch({type: actionTypes.GET_COUNTRIES})
    };
};
*/
console.log( mapStateToProps);

//connect(mapStateToProps)(CountryFlagContainer);
//export default CountryFlagContainer;
export default connect(mapStateToProps)(CountryFlagContainer)
