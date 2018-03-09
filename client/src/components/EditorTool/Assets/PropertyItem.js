import React from 'react';


const PropertyItem = ({property, val, handleChange}) => {
    property = property.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
    property = property.charAt(0).toUpperCase() + property.slice(1)

    return(
        <div>
            <label className="propertyLabel">{property}</label>
            <input
                type="text"
                className="propertyValue"
                value={val}
                onChange={handleChange}
                onFocus={e => e.target.select()}
                />
        </div>
    )
}

export default PropertyItem;
