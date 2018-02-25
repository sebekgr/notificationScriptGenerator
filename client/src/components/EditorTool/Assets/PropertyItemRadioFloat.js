import React from 'react';


const PropertyItemRadioFloat = ({handleChange, isChecked}) => {

    return(
        <div>

                <input defaultChecked={isChecked === "none"} name="float" onClick={handleChange} type="radio" className="propertyValue" value="none" id="floatNone"/>
                <label htmlFor="floatNone" className="propertyLabel">None</label>
                <input defaultChecked={isChecked === "left"} name="float" onClick={handleChange} type="radio" className="propertyValue" value="left" id="floatLeft"/>
                <label htmlFor="floatLeft" className="propertyLabel">Left</label>
                <input defaultChecked={isChecked === "right"} name="float" onClick={handleChange} type="radio" className="propertyValue" value="right" id="floatRight"/>
                <label htmlFor="floatRight" className="propertyLabel">Right</label>

        </div>
    )
}

export default PropertyItemRadioFloat;