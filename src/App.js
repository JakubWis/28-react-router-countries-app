import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, IndexLink, hashHistory } from 'react-router';
import DevTools from './DevTools';

class App extends Component {
    render() {
        return (
            <>
            <Router history={hashHistory}>
                <Route path='/' component={Navigation}>
                    <IndexRoute component={Home} />
                    <Route path='/contact' component={Contact} />
                    <Route path='*' component={PageNotFound} />
                </Route>
            </Router>
            <DevTools />
            </>
        )
    }
}

const Navigation = (props) => (
    <div>
       <ul>
            <li><IndexLink to="/" activeStyle={{color: '#48abee'}}>Home</IndexLink></li>
            <li><IndexLink to="/contact" activeStyle={{color: '#48abee'}}>Contact</IndexLink></li>
        </ul>
        {props.children}
    </div>
);
const Home = () => <h1>Hej, tu Home component</h1>
const Contact = () => <h1>A tu Contact component</h1>
const PageNotFound = () => <h1>404 Not Found</h1>;

export default App;