import React from 'react';


const PropertyItemRange = ({property, val, handleChange, min, max}) => {
    //property.replace( /([a-z])([A-Z])/g, '$1 $2' ).toUpperCase();
    
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
                max="1000"
            />
            
        </div>
    )
}

export default PropertyItemRange;