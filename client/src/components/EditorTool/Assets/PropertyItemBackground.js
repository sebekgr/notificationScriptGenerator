import React from 'react';


const PropertyItemBackground = ({val, handleChange, isChecked}) =>{
    return(
        <div>
            <p>Background settings:</p>
            <label htmlFor="overlay">Overlay</label>
            <input checked={isChecked} type="radio" id="overlay" value="overlay" onChange={handleChange}/>

            <label htmlFor="overlay">Shadow</label>
            <input checked={!isChecked} type="radio" id="overlay" value="shadow" onChange={handleChange}/>
        </div>
    );

}

export default PropertyItemBackground;