import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {
  createBrowserHistory,
  createHashHistory,
  createMemoryHistory
} from 'history';
import Header from './Header';


const Profile = () => {
    return(
        <div>
        <h1>profile</h1>
            <a href="/auth/logout">Wyloguj sie</a>
        </div>
    )
}
const ScriptCreator = () => <h2> ScriptCreator </h2>
const Home = () => {
    return (
        <div>
            <h2> Home </h2>
            <a href="/auth/google">Zaloguj sie </a>
        </div>
    );
}
const NotFound = () => <h2> not found</h2>

class App extends Component {

    componentDidMount(){
        this.props.fetchUser();
    }

    render() {
        return (
            <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profile" component={Profile} /> 
                    <Route exact path="/profile/newscript" component={ScriptCreator} />
                    <Route component={NotFound} />
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

export default connect(null, actions)(App);