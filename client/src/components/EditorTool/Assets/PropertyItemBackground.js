import React from 'react';
import {Switch, Card} from 'antd';


const PropertyItemBackground = ({val, handleChange, isChecked}) =>{
    return(
        <Card title={"Background"} hoverable="true" style={{background: '#f0f2f5', border:'1px solid #e1e1e1'}}>
            <Switch checked={isChecked} onChange={handleChange} checkedChildren="Shadow" unCheckedChildren="Overlay" />
        </Card>
    );

}

export default PropertyItemBackground;