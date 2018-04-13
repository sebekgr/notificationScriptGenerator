import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import LoginBtn from './LoginBtn';



class Login extends Component {

    handleLogin(){
        if(this.props.auth) {
            return (<Redirect to={this.props.location.from}/>)
        } else {
            return (
                <Fragment>
                    <h1>Login</h1>
                    <LoginBtn />
                </Fragment>
            );
        }
    }

    render() {
        return (
            <div className="loginBox">
                {this.handleLogin()}
            </div>
        )
    }

}


const mapStateToProps = ({ auth}) => {
    return { auth};
}

export default connect(mapStateToProps, actions)(Login);