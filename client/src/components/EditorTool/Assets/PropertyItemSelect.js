import React from 'react';


const PropertyItemSelect = ({property, val, handleChange,  selectList}) => {

    const proplist = selectList.map( (name, i) => {
        return(
            <option
                style={{fontFamily: (property !== 'animation' ? name : 'Verdana')}}
                key={i}
                onMouseOver={handleChange}
                value={name}>
                {name}
            </option>
        );
    })


    return(
        <div>
            <label className="propertyLabel">{property}</label>
            <select onChange={handleChange}>
                {proplist}
            </select>

        </div>
    )
}

export default PropertyItemSelect;