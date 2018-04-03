import React from 'react';
import { SketchPicker } from 'react-color';
import { Card, Tag, Button, Popover} from 'antd';

const PropertyItemColor = ({val, property, handleChange, id, much}) => {

    let newProp = property.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
        newProp = newProp.charAt(0).toUpperCase() + newProp.slice(1);
     
        return(
            <Card title={newProp} hoverable="true" style={{background: '#f0f2f5', border:'1px solid #e1e1e1'}}>
                <Tag style={{border: '1px solid grey'}} color={val}>Color</Tag>
                <Popover
                    placement="right"
                    content={<SketchPicker color={val} onChangeComplete={color => handleChange(color.hex, id, property, much) }/>}
                    trigger="click"
                >
                    <Button>{val}</Button>
                </Popover>
               
            </Card>
        )

   
}

export default PropertyItemColor;
