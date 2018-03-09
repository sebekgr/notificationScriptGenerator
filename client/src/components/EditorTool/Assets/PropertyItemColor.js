import React, {Component} from 'react';
import { SketchPicker } from 'react-color';

class PropertyItemColor extends Component  {

    state = {picker: false}
    
    toggle() {
        this.setState({picker: !this.state.picker});
    }
    
    render() {
        const {val, property, handleChange} = this.props;
        let newProp = property.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
        newProp = newProp.charAt(0).toUpperCase() + newProp.slice(1);
        return(
            <div>
                <label className="propertyLabel">{newProp}</label>
                <input
                    type="text"
                    className="propertyValue"
                    placeholder={val}
                    onClick={() =>this.toggle()}
                />
                {this.state.picker ? <SketchPicker color={val} onChangeComplete={ handleChange }/> : null}
            </div>
        )
    }
   
}

export default PropertyItemColor;