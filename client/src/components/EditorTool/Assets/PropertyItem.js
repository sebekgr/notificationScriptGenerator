import React from 'react';


const PropertyItem = ({property, val, handleChange}) => {

    // let newVal = val.includes("px") ? (Number(val.slice(0, -2), 10)) : val;
    // console.log(typeof newVal, newVal);

    return(
        <div>
            <label className="propertyLabel">{property}</label>
            <input className="propertyValue" value={val} onChange={handleChange}/>
        </div>
    )
}

export default PropertyItem;