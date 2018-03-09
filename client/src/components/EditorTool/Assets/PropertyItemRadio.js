import React from 'react';


const PropertyItemRadioFloat = ({property, handleChange, type, isChecked}) => {
    property = property.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
    property = property.charAt(0).toUpperCase() + property.slice(1)
    const propertyRadioItem = type.map( (tname, i) => {
        return[
            <input key={i} checked={tname === isChecked} onChange={handleChange} type="radio" className="propertyValue" value={tname} id={tname} />,
                <label key={--i} htmlFor={tname} className="property-label">{tname}</label>
        ]
    })

    return(
        <div>
            {property}
            {propertyRadioItem}
        </div>
    )
}

export default PropertyItemRadioFloat;