import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import CountryFlagContainer from './containers/flag-container.component';
console.log(CountryFlagContainer)
export default (
<Route path='/' component={Navigation}>
    <IndexRoute component={Home}/>
    <Route path='countries' component={CountryFlagContainer.WrappedComponent}/>
    <Route path='contact' component={Contact}/>
    <Route path='*' component={NotFound}/>
</Route>
);