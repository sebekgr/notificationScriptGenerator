import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import {Icon} from 'antd';

class Login extends Component {

    handleLogin(){
        if(this.props.auth) {
            return (<Redirect to={this.props.location.from}/>)
        } else {
            return (
            <div style={{display: 'flex', fontSize: '26px',justifyContent: 'center',  padding: '10%'}}>
                <a className="googleLogin" href="/auth/google">Please login with &nbsp;<Icon style={{fontSize: '36px'}} type="google-plus" /></a> 
            </div>
            );
        }
    }

    render() {
        return (
            <div>
                {this.handleLogin()}
            </div>
        )
    }

}


const mapStateToProps = ({ auth}) => {
    return { auth};
}

export default connect(mapStateToProps, actions)(Login);