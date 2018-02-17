import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
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
          <Route component={NotFound} />
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
                    <PrivateRoute  exact path="/profile" component={Profile} auth={this.props.auth} />
                    <PrivateRoute  exact path="/profile/editor" component={ScriptCreator} auth={this.props.auth} />
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
