import React from 'react';
import { Card, Radio} from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const PropertyItemRadio = ({id, property, handleChange, type, isChecked}) => {
    let newProp = property.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
        newProp = newProp.charAt(0).toUpperCase() + newProp.slice(1);
    const propertyRadioItem = type.map( (tname, i) => {
        return (
            <RadioButton key={i} checked={tname === isChecked} value={tname} id={tname}> {tname}</RadioButton>
        );
    })

    return(
        <Card title={newProp} hoverable="true" style={{background: '#f0f2f5', border:'1px solid #e1e1e1'}}>
            <RadioGroup onChange={handleChange}>
            {propertyRadioItem}
            </RadioGroup>
        </Card>
    )
}

export default PropertyItemRadio;