import React from 'react';
import {Icon} from 'antd';
const NotFound = () => {
    return(
        <div style={{height: '100%', textAlign:'center', padding:'10%'}}>
        <h1>Page not found</h1>
        <Icon type="warning" style={{fontSize: '124px', color: '#ffa940'}}/>
        </div>
    )

}
export default NotFound;