import React from 'react';
import { Slider, InputNumber, Tooltip, Card} from  'antd';

const PropertyItemRange = ({property, value, handleChange, max, min, id, much}) => {
    let units = value.slice(-2);
    let newProp = property.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
        newProp = newProp.charAt(0).toUpperCase() + newProp.slice(1);
        const step = property === 'delay' ? 1000: 1;
    value = parseInt(value, 10);
    return (

                    <Card title={newProp} hoverable="true" style={{background: '#f0f2f5', border:'1px solid #e1e1e1'}}>
                        <Slider
                        step={step}
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