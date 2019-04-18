import React, { Component } from 'react';
import { connect } from 'react-redux';
import CountryFlagList from '../presentational/flag-list.component';
import * as actionTypes from '../actions/actions';

class CountryFlagContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        console.log(this.props);
        this.props.onGetCountries();
    }

    render() {
        return (
            <div>
                <CountryFlagList countries={this.props.countries}/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        countries: state.countriesReducer.countries
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onGetCountries: () => dispatch({type: actionTypes.GET_COUNTRIES})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryFlagContainer)
