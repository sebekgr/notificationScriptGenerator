import React, { Component } from 'react';
import {Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import NotFound from './NotFound';
import MyHeader from './MyHeader';
import {Layout} from 'antd';
import Loadable from 'react-loadable';
import Loading from './Loading';
import Login from './Login';
import MyFooter from './Footer'
const {  Content } = Layout;





const PrivateRoute = ({auth, component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        auth ? <Component {...props} /> :
        <Redirect to={{
            pathname: '/login',
            from: props.location.pathname
        }} />
    )}
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
const AsyncHome = Loadable({
    loader: () => import('./Home'),
    loading: Loading
});

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        const {auth} = this.props;
        let isAuth = Boolean(auth);
        return (
            <Layout style={{height: '100vh'}}>
                    <MyHeader auth={isAuth} location={this.props.location.pathname} />
                    <Content className="mainContentWrapper" style={{height: '80%'}}>
                        <Switch>
                            <Route exact path="/" component={AsyncHome}/>
                            <Route path="/login" component={Login} />
                            <PrivateRoute auth={isAuth} exact path="/profile" component={AsyncProfile} />
                            <PrivateRoute auth={isAuth} exact path="/profile/editor" component={AsyncEditor} />
                            <Route component={NotFound} />
                        </Switch>
                    </Content>
                    {this.props.location.pathname !== '/profile/editor' ? <MyFooter/> : null}
           </Layout>
        );
    }
}

const mapStateToProps = ({ auth, routing }) => {
    return { auth, routing };
}

export default withRouter(connect(mapStateToProps, actions)(App));
