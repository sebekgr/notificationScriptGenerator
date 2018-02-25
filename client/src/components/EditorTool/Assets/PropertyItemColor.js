import React from 'react';

const PropertyItemColor = ({property, val, handleChange}) => {
    return(
        <div>
            <label className="propertyLabel">{property}</label>
            <input type="color" className="propertyValue" value={val} onChange={handleChange}/>
        </div>
    )
}

export default PropertyItemColor;