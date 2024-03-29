import React from 'react';
import { Link } from 'react-router';

import CountryFlag from './flag.component'

const CountryFlagList = (props) => (
    <div clsasName="countries-list">
        {props.countries.map(country => {
            return (
                <div className="single-country" key={country.id}>
                    <Link className='logo' to={'countries/country' + country.id}>
                        <CountryFlag country={country} />
                    </Link>
                </div>
            )
        })}
    </div>
);

export default CountryFlagList;