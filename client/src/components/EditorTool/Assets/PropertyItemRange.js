import React from 'react';
import { Slider, InputNumber, Tooltip, Card} from  'antd';

const PropertyItemRange = ({property, value, handleChange, max, min, id, much}) => {
    let units = value.slice(-2);
    let newProp = property.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
        newProp = newProp.charAt(0).toUpperCase() + newProp.slice(1);
    value = parseInt(value, 10);
    return (

                    <Card title={newProp} style={{backgroundColor: '#40a9ff'}}>
                        <Slider
             
                         min={min}
                          max={max}
                          onChange={value => handleChange(value, id, property, much, max, min)}
                          value={parseInt(value,10)}
                          />

                    <Tooltip placement="right" title={`Minimum ${min} and maximum  ${max}`}>
                        <InputNumber
                            min={min}
                            max={max}
                            formatter={value => `${value} ${units}`}
                            parser={value => value.replace(units, '')}
                            value={value}
                            onChange={value => handleChange(value, id, property, much, max, min)}
                        />
                         </Tooltip>
                    </Card>
                   

        
    )
}

export default PropertyItemRange;