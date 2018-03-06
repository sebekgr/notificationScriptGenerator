import React from 'react';


const PropertyItem = ({property, val, handleChange}) => {
    // property.replace( /([a-z])([A-Z])/g, '$1 $2' ).toUpperCase();

    return(
        <div>
            <label className="propertyLabel">{property}</label>
            <input type="text" className="propertyValue" value={val} onChange={handleChange}/>
        </div>
    )
}

export default PropertyItem;
