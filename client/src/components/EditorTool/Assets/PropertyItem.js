import React from 'react';
import { Card, Input} from 'antd';

const PropertyItem = ({property, val, handleChange}) => {
    let newProp = property.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
        newProp = newProp.charAt(0).toUpperCase() + newProp.slice(1);

    return(
        <Card title={newProp} hoverable="true" style={{background: '#f0f2f5', border:'1px solid #e1e1e1'}}>
            <Input
                value={val}
                onChange={handleChange}
                onFocus={e => e.target.select()}
             />
        </Card>
    )
}

export default PropertyItem;


