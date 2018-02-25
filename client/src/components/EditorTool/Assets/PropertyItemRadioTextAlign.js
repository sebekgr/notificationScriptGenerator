import React from 'react';


const PropertyItemRadioTextAlign = ({handleChange, isChecked, property}) => {
    return(
        <div>
                {property}
                <input checked={isChecked === "left"} name="textAlign" onClick={handleChange} type="radio" className="propertyValue" value="left" id="alignLeft"/>
                <label htmlFor="alignLeft" className="propertyLabel">{this.className}</label>

                <input checked={isChecked === "center"} name="textAlign" onClick={handleChange} type="radio" className="propertyValue" value="center" id="alignCenter"/>
                <label htmlFor="alignCenter" className="propertyLabel">Center</label>

                <input checked={isChecked === "right"} name="textAlign" onClick={handleChange} type="radio" className="propertyValue" value="right" id="alignRight"/>
                <label htmlFor="alignRight" className="propertyLabel">Right</label>

        </div>
    )
}

export default PropertyItemRadioTextAlign;