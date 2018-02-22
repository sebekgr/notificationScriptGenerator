import React from 'react';


const PropertyItem = ({property, val, handleChange}) => {
    return(
        <div>
            <label>{property}</label>
            <input value={val} onChange={handleChange}/>
        </div>
    )
}

export default PropertyItem;