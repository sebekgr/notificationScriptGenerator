import React from 'react';


const PropertyItemSelect = ({property, val }) => {
    return(
        <div>
            <label className="propertyLabel">{property}</label>
            <input className="propertyValue" value={val} />
        </div>
    )
}

export default PropertyItemSelect;