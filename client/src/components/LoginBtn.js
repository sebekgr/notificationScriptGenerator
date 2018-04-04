 import React from 'react';
 import {Icon} from 'antd';
 const LoginBtn = () => {
     return (
                <a className="googleLogin" href="/auth/google">Login with &nbsp;<Icon style={{fontSize: '36px'}} type="google-plus" /></a> 
     )  
    
 }
export default LoginBtn;