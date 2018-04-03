import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Home from './Home';
import NotFound from './NotFound';
import MyHeader from './MyHeader';
import {Layout} from 'antd';
import Loadable from 'react-loadable';
import Loading from './Loading';
const {  Content, Footer } = Layout;


const PrivateRoute = ({ auth, component: Component, ...rest }) => (
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


const AsyncEditor = Loadable({
    loader: () => import('./EditorTool/Editor'),
    loading: Loading
});

const AsyncProfile = Loadable({
    loader: () => import('./Profile'),
    loading: Loading
});

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <Layout style={{height: '100vh'}}>
                    <MyHeader auth={this.props.auth} location={this.props.location.pathname} />
                
                    <Content style={{height: '80%'}}>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute exact path="/profile" component={AsyncProfile} auth={this.props.auth} />
                        <PrivateRoute exact path="/profile/editor" component={AsyncEditor} auth={this.props.auth} />
                    </Content>
                    {this.props.location.pathname !== '/profile/editor' ? <Footer style={{ textAlign: 'center'}}> Popup Generator ©{new Date().getFullYear()} Created by Sebastian Gralikowski </Footer> : null}
               
                
            </Layout>
        );
    }
}

const mapStateToProps = ({ auth, routing }) => {
    return { auth, routing };
}

export default withRouter(connect(mapStateToProps, actions)(App));
