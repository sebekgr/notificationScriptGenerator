import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Profile from './Profile';
import Editor from './EditorTool/Editor';
import Home from './Home';
import NotFound from './NotFound';
import MyHeader from './MyHeader';
import { Layout} from 'antd';
const { Footer, Header } = Layout;

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

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <Layout style={{height: '100vh'}}>
                <Header style={{height: 'auto'}}>
                    <MyHeader auth={this.props.auth} location={this.props.location.pathname} />
                </Header>
         
                    <Layout style={{height: 'auto'}}>
                        <Route exact path="/" component={Home} />
                        <PrivateRoute exact path="/profile" component={Profile} auth={this.props.auth} />
                        <PrivateRoute exact path="/profile/editor" component={Editor} auth={this.props.auth} />
                    </Layout>
                
                {this.props.location.pathname !== '/profile/editor' ? <Footer style={{ textAlign: 'center', height:'10vh' }}> Notification Generator ©{new Date().getFullYear()} Created by Sebastian Gralikowski </Footer> : null}
            </Layout>
        );
    }
}

const mapStateToProps = ({ auth, routing }) => {
    return { auth, routing };
}

export default withRouter(connect(mapStateToProps, actions)(App));
