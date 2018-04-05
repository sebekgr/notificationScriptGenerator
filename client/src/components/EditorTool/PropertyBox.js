import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PropertyItem from './Assets/PropertyItem';
import PropertyItemColor from './Assets/PropertyItemColor';
import PropertyItemRadio from './Assets/PropertyItemRadio';
import PropertyItemRange from './Assets/PropertyItemRange';
import PropertyItemSelect from './Assets/PropertyItemSelect';
import PropertyItemBackground from './Assets/PropertyItemBackground';
import { List } from 'antd';

class PropertyBox extends Component {

    constructor(props) {
        super(props);
        this.rangeRegex = /^\d+/;
        this.colorRegex = /(color)/i;
        this.selectRegex = /(family|animationName)/i;
        this.radioRegex = /(float|align)/i;
        this.paddingMarginRegex = /(padding|margin)/i;
        this.borderRegex = /(border$)/i;
        this.widthHeightRegex = /(^width|^height)/i;
        this.min = 1000;
        this.max = 100000;
        this.handleChange = this.handleChange.bind(this);
    }

    

    handleChange(value, id, property, much, max = this.max, min = this.max) {
        //small validation
        if (min > value && value < max) {
            return false;
        }

        let newValue = null;

        if ((String(value).match(/^\d+/)) && ((property === "animationDuration") || property === "delay")) {
            newValue = `${value}ms`;
        } else if (String(value).match(/^\d+/)) {
            newValue = `${value}px`;
        } else {
            newValue = value;
        }
        if (Object.keys(this.props.elements.selectedElement).length === 0 && much < 2) {
            if (property === "delay") {
                this.props.updateCanvasContent(id, newValue, property)
            } else {
                this.props.updateCanvas(id, newValue, property);
            }
        } else if (Object.keys(this.props.elements.selectedElement).length !== 0 && much < 2) {
            this.props.updateElement(id, newValue, property);

        }
        if (much > 1) {
            this.props.updateForm(id, newValue, property, much);

        }

    }

    updateElementContent(id, e, much) {
        if (much > 1) {
            this.props.updateFormContent(id, e.target.value, much);
        } else {
            this.props.updateElementContent(id, e.target.value);
        }
    }

    updateCanvasBackground(e) {
        this.props.updateCanvasOverlay(e);
    }

    renderPropertyItem(forEdit, forEditStyle, listSelect, content, name = "Content", much = 1) {
        let i = 1 * much;
        let j = 100 * much;
        let list = []
        const { floatRadio, alignRadio } = this.props.elements;
        if (forEdit.hasOwnProperty('elemType') && forEdit.elemType !== "div") {
            var { float } = forEditStyle;
            list.push(
                <PropertyItem
                    key={i++}
                    property={name}
                    val={content}
                    much={much}
                    handleChange={(e) => this.updateElementContent(forEdit.id, e, much)}
                />
            );
        }

        if (forEdit.hasOwnProperty('delay')) {
            list.push(

                <PropertyItemRange
                    key={j++}
                    id={forEdit.id}
                    property={"delay"}
                    value={forEdit['delay']}
                    max={100000}
                    min={1000}
                    much={much}
                    handleChange={this.handleChange}
                />
            );
        }
        if (forEditStyle) {
            for (let [property, val] of Object.entries(forEditStyle)) {
                switch (property) {
                    case (property.match(this.widthHeightRegex) || {}).input:
                        if (forEdit.elemType !== 'img') {
                             this.min = 0; this.max = 1300;
                        } 
                        else { this.min = 10; this.max = 800; }
                        break;
                    case (property.match(this.paddingMarginRegex) || {}).input:
                    case (property.match(this.borderRegex) || {}).input:
                        this.min = 0; this.max = 300;
                        break;
                    case 'animationDuration':
                        this.min = 1000; this.max = 5000;
                        break;
                    case 'fontSize':
                        this.min = 5; this.max = 100;
                        break;
                    case 'borderRadius':
                        this.min = 0; this.max = 500;
                        break;
                    default: this.min = 0; this.max = 100;
                }

                if (val.match(this.rangeRegex)) {
                    list.push(
                        <PropertyItemRange
                            key={j++}
                            id={forEdit.id}
                            property={property}
                            value={val}
                            max={this.max}
                            min={this.min}
                            much={much}
                            handleChange={this.handleChange}
                        />
                    )
                } else if (property.match(this.radioRegex)) {
                    let type = property.match(/(float)/) ? floatRadio : alignRadio;
                    let isChecked = property.match(/(float)/) ? float : forEditStyle.textAlign;
                    list.push(
                        <PropertyItemRadio
                            key={j++}
                            property={property}
                            val={val}
                            type={type}
                            isChecked={isChecked}
                            handleChange={(e) => this.handleChange(e.target.value, forEdit.id, property, much)}
                        />
                    )
                } else if (property.match(this.colorRegex)) {
                    list.push(
                        <PropertyItemColor
                            id={forEdit.id}
                            much={much}
                            key={j++}
                            property={property}
                            val={val}
                            handleChange={this.handleChange}
                        />
                    )
                } else if (property.match(this.selectRegex)) {
                    list.push(
                        <PropertyItemSelect
                            property={property}
                            id={forEdit.id}
                            much={much}
                            val={val}
                            key={j++}
                            selectList={listSelect}
                            handleChange={this.handleChange}
                        />
                    )
                }
            }
        }
        return <List
            style={{marginTop: '20px'}}
            bordered="true"
            dataSource={list}
            itemLayout="vertical"
            renderItem={item => (<List.Item>{item}</List.Item>)}
            header={<strong style={{color: '#1890ff'}}>{name}</strong>}
            key={j}
            size="large"
        />

    }

    renderProperties(selectedItem, style, listSelect) {

        let mylist = [];

        if (selectedItem.elemType === "form") {
            mylist = [];
            mylist.push(this.renderPropertyItem(selectedItem, style.formStyle, listSelect, selectedItem.content.action, "Form", 2));
            mylist.push(this.renderPropertyItem(selectedItem, style.inputStyle, listSelect, selectedItem.content.input, "Textfield", 3));
            mylist.push(this.renderPropertyItem(selectedItem, style.submitStyle, listSelect, selectedItem.content.submit, "Button form", 4));
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
            <Fragment>
                <PropertyItemBackground
                    handleChange={(e) => this.updateCanvasBackground(e)}
                    isChecked={this.props.mainCanvas.overlay}
                />


                {this.renderProperties(selectedItem, selectedItem.style, listSelect)}

            </Fragment>




        );
    }

}

const mapStateToProps = ({ elements, mainCanvas }) => {
    return { elements, mainCanvas };
}

export default connect(mapStateToProps, actions)(PropertyBox);