import React, {Component} from 'react';
import {Route, Switch, Redirect, Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Profile from './Profile';
import ScriptCreator from './ScriptCreator';
import Home from './Home';
import NotFound from './NotFound';
import Header from './Header';

const PrivateRoute = ({auth, component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to="/"
          />
        )
      }
    />
  );

class App extends Component {

    componentDidMount(){
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <Header />
                    

                <main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <PrivateRoute auth={this.props.auth} exact path="/profile" component={Profile} />
                    <PrivateRoute auth={this.props.auth} exact path="/profile/editor" component={ScriptCreator} />
                    <Route component={NotFound} />
                    </Switch>  
                </main>
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => {
    return {auth};
}

export default withRouter(connect(mapStateToProps, actions)(App));
