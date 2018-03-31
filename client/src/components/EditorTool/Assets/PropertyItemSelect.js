import React from 'react';
import { Select, Card } from 'antd';
const Option = Select.Option;

const PropertyItemSelect = ({property, val, handleChange,  selectList, id, much}) => {
    let newProp = property.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
        newProp = newProp.charAt(0).toUpperCase() + newProp.slice(1);
    const proplist = selectList.map( (name, i) => {
        return(
            <Option
                style={{fontFamily: (property !== 'animation' ? name : 'Roboto')}}
                key={i}
                value={name}>
                {name}
            </Option>
        );
    })


    return(
        <Card title={newProp} style={{backgroundColor: '#40a9ff'}}>
            <Select value={val} onChange={value => handleChange(value, id, property, much)}>
                {proplist}
            </Select>

        </Card>
    )
}

export default PropertyItemSelect;