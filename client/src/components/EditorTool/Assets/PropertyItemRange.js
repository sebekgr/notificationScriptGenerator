import React from 'react';


const PropertyItemRange = ({property, val, handleChange, max, min}) => {
    property = property.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
    property = property.charAt(0).toUpperCase() + property.slice(1)
    let newVal = val.slice(0, -2);
    return(
        <div>
            <label className="propertyLabel">{property}</label>
            <input
                type="number"
                className="propertyValue"
                value={newVal}
                onChange={handleChange}
            />
            
            
            <input
                type="range"
                className="propertyValue" value={newVal}
                onChange={handleChange}
                max={max}
                min={min}
            />
            
        </div>
    )
}

export default PropertyItemRange;