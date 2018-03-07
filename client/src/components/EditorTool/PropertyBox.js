import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PropertyItem from './Assets/PropertyItem';
import PropertyItemColor from './Assets/PropertyItemColor';
import PropertyItemRadio from './Assets/PropertyItemRadio';
import PropertyItemRange from './Assets/PropertyItemRange';
import PropertyItemSelect from './Assets/PropertyItemSelect';


class PropertyBox extends Component {

    constructor(props) {
        super(props);
        this.rangeRegex = /^\d+/;
        this.colorRegex = /(color)/i;
        this.selectRegex = /(family|animationName)/i;
        this.radioRegex = /(float|align)/i;
    }

    handleChange(id, e, prop, much) {
        let newValue = null;
        if ((e.match(/^\d+/)) && (prop === "animationDuration")) {
            newValue = `${e}ms`;
        } else if (e.match(/^\d+/)) {
            newValue = `${e}px`;
        } else {
            newValue = e;
        }
        if (Object.keys(this.props.elements.selectedElement).length === 0 && much < 2) {
            if(prop === "transitionToNext" || "delay"){
                this.props.updateCanvasContent(id, newValue, prop)
            } else {
                this.props.updateCanvas(id, newValue, prop);
            }
        } else if(Object.keys(this.props.elements.selectedElement).length !== 0 && much < 2 ){
            this.props.updateElement(id, newValue, prop);

        }
        if(much > 1) {
            this.props.updateForm(id, newValue, prop, much);
        }

    }

    updateElementContent(id, e, much) {
        if(much > 1) {
            this.props.updateFormContent(id, e.target.value, much);
        } else {
            this.props.updateElementContent(id, e.target.value);
        }
    }

    updateCanvasContent(id, e, prop){

    }

    renderPropertyItem(forEdit, forEditStyle, listSelect, content, name = "Content", much = 1) {
        let i = 1*much;
        let j = 100*much;
        let list = []
                const { floatRadio, alignRadio, fonts } = this.props.elements;
                
            if (forEdit.hasOwnProperty('elemType')) {
                var { float, textAlign, fontFamily } = forEditStyle;
                list.push(
                    <PropertyItem
                        key={i++}
                        property={name}
                        val={content}
                        handleChange={(e) => this.updateElementContent(forEdit.id, e, much)}
                    />
                );
            }

            if (forEdit.hasOwnProperty('transitionToNext')) {
                var { float, textAlign, fontFamily } = forEditStyle;
                list.push(
                    <PropertyItemRange
                        key={i++}
                        property={"Transition to next canvas"}
                        val={forEdit['transitionToNext']}
                        handleChange={e => this.handleChange(forEdit.id, e.target.value, "transitionToNext", much)}
                    />
                );
            }
            if (forEdit.hasOwnProperty('delay')) {
                var { float, textAlign, fontFamily } = forEditStyle;
                list.push(
                    <PropertyItemRange
                        key={i++}
                        property={"Delay with fire-up the canvas "}
                        val={forEdit['delay']}
                        handleChange={e => this.handleChange(forEdit.id, e.target.value, "delay", much)}
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
                                handleChange={e => this.handleChange(forEdit.id, e.target.value, property, much)}
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
                                handleChange={e => this.handleChange(forEdit.id, e.target.value, property, much)}
                            />
                        )
                    } else if (property.match(this.colorRegex)) {
                        list.push(
                            <PropertyItemColor
                                key={j++}
                                property={property}
                                val={val}
                                handleChange={color => this.handleChange(forEdit.id, color.hex, property, much)}
                            />
                        )
                    } else if (property.match(this.selectRegex)) {
                        list.push(
                            <PropertyItemSelect
                                property={property}
                                val={val}
                                key={j++}
                                selectList={listSelect}
                                handleChange={e => this.handleChange(forEdit.id, e.target.value, property, much)}
                            />
                        )
                    }
                }
            }
            return <div key={j*6} style={{border: '2px solid red', margin: '10px 0'}}>{list}</div>;
    }

    renderTest(selectedItem, style, listSelect){

        let mylist = [];

        if(selectedItem.elemType === "form") {
            mylist = [];
            mylist.push(this.renderPropertyItem(selectedItem, style.formStyle, listSelect, selectedItem.content.action, "Form action",2));
            mylist.push(this.renderPropertyItem(selectedItem, style.submitStyle, listSelect, selectedItem.content.input,"Textfield",3));
            mylist.push(this.renderPropertyItem(selectedItem, style.inputStyle, listSelect, selectedItem.content.submit,"Button form", 4));
            return mylist;
        } else {
            mylist = [];
            mylist.push(this.renderPropertyItem(selectedItem, style, listSelect, selectedItem.content));
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