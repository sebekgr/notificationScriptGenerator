import React from 'react';
import {Switch, Card} from 'antd';


const PropertyItemBackground = ({val, handleChange, isChecked}) =>{
    return(
        <Card title={"Background"} style={{backgroundColor: '#40a9ff'}}>
            <Switch checked={isChecked} onChange={handleChange} checkedChildren="Shadow" unCheckedChildren="Overlay" />
        </Card>
    );

}

export default PropertyItemBackground;