import React, {Component} from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Profile from './Profile';
import ScriptCreator from './ScriptCreator';
import Home from './Home';
import NotFound from './NotFound';



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

class MyRouter extends Component {

    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <PrivateRoute auth={this.props.auth} exact path="/profile" component={Profile} /> 
                    <PrivateRoute auth={this.props.auth} exact path="/profile/newscript" component={ScriptCreator} />
                    <Route component={NotFound} />
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = ({auth}) => {
     
    return {auth};
    
}

export default connect(mapStateToProps, actions)(MyRouter);