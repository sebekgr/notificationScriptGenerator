import React from 'react';


const PropertyItemRange = ({property, val, handleChange}) => {
    return(
        <div>
            <label className="propertyLabel">{property}</label>
            <input type="range" className="propertyValue" value={val} onChange={handleChange}/>
        </div>
    )
}

export default PropertyItemRange;