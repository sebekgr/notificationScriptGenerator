import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import PropertyItem from './Assets/PropertyItem';
import PropertyItemColor from './Assets/PropertyItemColor';
import PropertyItemRadio from './Assets/PropertyItemRadio';
import PropertyItemRange from './Assets/PropertyItemRange';
import PropertyItemSelect from './Assets/PropertyItemSelect';


class PropertyBox extends Component {

    constructor(props){
        super(props);

        this.rangeRegex = /^\d+/;
        this.colorRegex = /(color)/i;
        this.selectRegex = /(family|animationName)/i;
        this.radioRegex = /(float|align)/i;

    }

    handleChange(id, e, prop){
        let newValue = null;
        if((e.match(/^\d+/)) && (prop === "animationDuration")) {
            newValue = `${e}ms`;
        } else if(e.match(/^\d+/)) {
            newValue = `${e}px`;
        } else {
            newValue = e;
        }

        if(Object.keys(this.props.elements.selectedElement).length === 0){
            this.props.updateCanvas(id, newValue, prop);
        } else {
            this.props.updateElement(id, newValue, prop);
        }
           

    }

    updateElementContent(id, e) {
        this.props.updateElementContent(id, e.target.value);
    }

    renderPropertyItem(forEdit, forEditStyle, listSelect){
        let list = [];
        let key = 1;
        let key2 = 1000;
        const {floatRadio, alignRadio, fonts} = this.props.elements;
    
        
        if(forEdit.hasOwnProperty('elemType')){
        var {float, textAlign, fontFamily} = forEdit.style;    
            list.push(
                <PropertyItem
                    key={key++}
                    property="Content"
                    val={forEdit.content}
                    handleChange={(e) => this.updateElementContent(forEdit.id, e)}
                />
            );
        }

        if(forEditStyle) {
        for(let [property, val] of Object.entries(forEditStyle)){

            if(val.match(this.rangeRegex)) {
                list.push(
                    <PropertyItemRange
                        key={key2--}
                        property={property}
                        val={val}
                        handleChange={e => this.handleChange(forEdit.id, e.target.value, property)}
                    />
                )
            } else if (property.match(this.radioRegex)) {
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
            } else if(property.match(this.colorRegex)) {
                list.push(
                    <PropertyItemColor
                        key={key2--}
                        property={property}
                        val={val}
                        handleChange={color => this.handleChange(forEdit.id, color.hex, property)}
                    />
                )
            } else if(property.match(this.selectRegex)) {
                list.push(
                    <PropertyItemSelect
                        property={property}
                        val={val}
                        key={key2--}
                        selectList={listSelect}
                        handleChange={e => this.handleChange(forEdit.id, e.target.value, property)}
                    />
                )
            }
        }
        }
        return list;
    }
    
    render(){
        const fontList = this.props.elements.fonts;
        const animationList = this.props.mainCanvas.animationList;
        const selectedCanvas = this.props.mainCanvas.selectedCanvas;
        const selectedElement = this.props.elements.selectedElement;
        const selectedItem = Object.keys(selectedElement).length === 0 ? selectedCanvas : selectedElement;
        const listSelect = selectedItem === selectedElement ? fontList : animationList;
        console.log(selectedItem.id);
        return(
            <div className="propertyListContainer">
            <h3>Property editor</h3>
                <ul className="propertyListBox style-3">
                {this.renderPropertyItem(selectedItem, selectedItem.style, listSelect)}
                </ul>
            </div>
        )
    }
    
}

const mapStateToProps = ({elements, mainCanvas}) => {
    return {elements, mainCanvas};
}

export default connect(mapStateToProps, actions)(PropertyBox);