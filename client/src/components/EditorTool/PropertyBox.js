import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import PropertyItem from './Assets/PropertyItem';
import PropertyItemColor from './Assets/PropertyItemColor';
import PropertyItemRadio from './Assets/PropertyItemRadio';
import PropertyItemRange from './Assets/PropertyItemRange';
import PropertyItemSelect from './Assets/PropertyItemSelect';


class PropertyBox extends Component {

    handleChange(id, e, prop){
        let newValue = null;
        if((e.match(/^\d+/)) && (prop === "animationDuration")) {
            newValue = `${e}ms`;
        } else if(e.match(/^\d+/)) {
            newValue = `${e}px`;
        } else {
            newValue = e;
        }
        if(id) {
            this.props.updateElement(id, newValue, prop);
        } else {
            this.props.updateCanvas(newValue, prop);
        }
    }

    updateElementContent(id, e) {
        this.props.updateElementContent(id, e.target.value);
    }

    renderPropertyItem(){
        let list = [];
        let key = 1;
        let key2 = 1000;
        const rangeRegex = /^\d+/;
        const colorRegex = /(color)/i;
        const selectRegex = /(family|animationName)/i;
        const radioRegex = /(float|align)/i;
        const {forEdit, selectList} = this.props;
        const {floatRadio, alignRadio, fonts} = this.props.elements;
        const {animationList} = this.props.mainCanvas;
        
        if(forEdit.hasOwnProperty('elemType')){
            var {float, textAlign, fontFamily} = this.props.elements.selectedElement.style;
            list.push(
                <PropertyItem
                    key={key++}
                    property="Content"
                    val={forEdit.content}
                    handleChange={(e) => this.updateElementContent(forEdit.id, e)}
                />
            );
        }

        for(let [property, val] of Object.entries(forEdit.style)){

            if(val.match(rangeRegex)) {
                list.push(
                    <PropertyItemRange
                        key={key2--}
                        property={property}
                        val={val}
                        handleChange={e => this.handleChange(forEdit.id, e.target.value, property)}
                    />
                )
            } else if (property.match(radioRegex)) {
                let type = property.match(/(float)/) ? floatRadio : alignRadio;
                let isChecked = property.match(/(float)/) ? float : textAlign;
                list.push(
                    <PropertyItemRadio
                        key={key2--}
                        property={property}
                        val={val}
                        type={type}
                        isChecked={isChecked}
                        handleChange={e => this.handleChange(forEdit.id, e.target.value, property)}
                    />
                )
            } else if(property.match(colorRegex)) {
                list.push(
                    <PropertyItemColor
                        key={key2--}
                        property={property}
                        val={val}
                        handleChange={color => this.handleChange(forEdit.id, color.hex, property)}
                    />
                )
            } else if(property.match(selectRegex)) {
                list.push(
                    <PropertyItemSelect
                        property={property}
                        val={val}
                        key={key2--}
                        selectList={selectList}
                        handleChange={e => this.handleChange(forEdit.id, e.target.value, property)}
                    />
                )
            }
        }
        return list;
    }
    
    render(){
        return(
            <div className="propertyListContainer">
            <h3>Property editor</h3>
                <ul className="propertyListBox style-3">
                {this.renderPropertyItem()}
                </ul>
            </div>
        )
    }
    
}

const mapStateToProps = ({elements, mainCanvas}) => {
    return {elements, mainCanvas};
}

export default connect(mapStateToProps, actions)(PropertyBox);
