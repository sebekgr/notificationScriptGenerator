import React from 'react';


const PropertyItemRadioFloat = ({property, handleChange, type, isChecked}) => {
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