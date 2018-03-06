import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PropertyItem from './Assets/PropertyItem';
import PropertyItemColor from './Assets/PropertyItemColor';
import PropertyItemRadio from './Assets/PropertyItemRadio';
import PropertyItemRange from './Assets/PropertyItemRange';
import PropertyItemSelect from './Assets/PropertyItemSelect';
import cuid from 'cuid';


class PropertyBox extends Component {

    constructor(props) {
        super(props);
        this.rangeRegex = /^\d+/;
        this.colorRegex = /(color)/i;
        this.selectRegex = /(family|animationName)/i;
        this.radioRegex = /(float|align)/i;
    }

    handleChange(id, e, prop) {
        let newValue = null;
        if ((e.match(/^\d+/)) && (prop === "animationDuration")) {
            newValue = `${e}ms`;
        } else if (e.match(/^\d+/)) {
            newValue = `${e}px`;
        } else {
            newValue = e;
        }

        if (Object.keys(this.props.elements.selectedElement).length === 0) {
            this.props.updateCanvas(id, newValue, prop);
        } else {
            this.props.updateElement(id, newValue, prop);
        }


    }

    updateElementContent(id, e) {
        this.props.updateElementContent(id, e.target.value);
    }

    renderPropertyItem(forEdit, forEditStyle, listSelect, much = 1) {
        let i = 1*much;
        let j = 100*much;
        let list = []
                const { floatRadio, alignRadio, fonts } = this.props.elements;
            if (forEdit.hasOwnProperty('elemType')) {
                var { float, textAlign, fontFamily } = forEditStyle;
                list.push(
                    <PropertyItem
                        key={i++}
                        property="Content"
                        val={forEdit.content}
                        handleChange={(e) => this.updateElementContent(forEdit.id, e)}
                    />
                );
            }





            if (forEditStyle) {
                for (let [property, val] of Object.entries(forEditStyle)) {
                    if (val.match(this.rangeRegex)) {
                        list.push(
                            <PropertyItemRange
                                key={j++}
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
                                key={j++}
                                property={property}
                                val={val}
                                type={type}
                                isChecked={isChecked}
                                handleChange={e => this.handleChange(forEdit.id, e.target.value, property)}
                            />
                        )
                    } else if (property.match(this.colorRegex)) {
                        list.push(
                            <PropertyItemColor
                                key={j++}
                                property={property}
                                val={val}
                                handleChange={color => this.handleChange(forEdit.id, color.hex, property)}
                            />
                        )
                    } else if (property.match(this.selectRegex)) {
                        list.push(
                            <PropertyItemSelect
                                property={property}
                                val={val}
                                key={j++}
                                selectList={listSelect}
                                handleChange={e => this.handleChange(forEdit.id, e.target.value, property)}
                            />
                        )
                    }
                }
            }
            return list;
    }

    renderTest(selectedItem, style, listSelect){

        let mylist = [];

        if(selectedItem.elemType === "form") {
            mylist = [];
            mylist.push(this.renderPropertyItem(selectedItem, style.formStyle, listSelect,2));
            mylist.push(this.renderPropertyItem(selectedItem, style.submitStyle, listSelect,3));
            mylist.push(this.renderPropertyItem(selectedItem, style.inputStyle, listSelect,4));
            return mylist;
        } else {
            mylist = [];
            mylist.push(this.renderPropertyItem(selectedItem, style, listSelect));
            return mylist;
        }

    }

    render() {
        const fontList = this.props.elements.fonts;
        const animationList = this.props.mainCanvas.animationList;
        const selectedCanvas = this.props.mainCanvas.selectedCanvas;
        const selectedElement = this.props.elements.selectedElement;
        let selectedItem = Object.keys(selectedElement).length === 0 ? selectedCanvas : selectedElement;
        let listSelect = selectedItem === selectedElement ? fontList : animationList;
        
        return (
            <div className="propertyListContainer">
                <h3>Property editor</h3>
                <ul className="propertyListBox style-3">
                {this.renderTest(selectedItem, selectedItem.style, listSelect)}
                </ul>
            </div>
        )
    }

}

const mapStateToProps = ({ elements, mainCanvas }) => {
    return { elements, mainCanvas };
}

export default connect(mapStateToProps, actions)(PropertyBox);