import React from 'react';
import {Icon} from 'antd';
const NotFound = () => {
    return(
        <div className="notfound">
        <h1>Page not found</h1>
        <Icon type="warning" style={{fontSize: '124px', color: '#ffa940'}}/>
        </div>
    )

}
export default NotFound;