import React, {Component} from 'react';
import {Route, Switch, Redirect, Link, withRouter, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Profile from './Profile';
import ScriptCreator from './ScriptCreator';
import Home from './Home';
import NotFound from './NotFound';

// const PrivateRoute = ({auth, component: Component, ...rest }) => (
//     <Route
//       {...rest}
//       render={props =>
//         auth ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to="/"
//           />
//         )
//       }
//     />
//   );

class App extends Component {

    componentDidMount(){
        this.props.fetchUser();
    }

    render() {
        return (
            <div>
                <header>
                    <Link to="/">Home</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/profile/editor">CreateScript</Link>
                </header>

                <main>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/profile/editor" component={ScriptCreator} />
                    <Route  exact component={NotFound} />
                </main>
            </div>
        );
    }
}

const mapStateToProps = ({auth}) => {
     
    return {auth};
    
}

export default connect(mapStateToProps, actions)(App)
