import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/editor';
import PropertyItem from './Assets/PropertyItem';
import PropertyItemColor from './Assets/PropertyItemColor';
import PropertyItemRadioFloat from './Assets/PropertyItemRadioFloat';
import PropertyItemRadioTextAlign from './Assets/PropertyItemRadioTextAlign';
import CanvasPropertyEditor from './CanvasPropertyEditor';


class PropertyBox extends Component {

    handleChange(id, e, prop){
            this.props.updateElement(id, e.target.value, prop);
    }

    updateElementContent(id, e) {
        this.props.updateElementContent(id, e.target.value);
    }

    renderPropertyItem(){
        let list = [];
        let key = 1;
        let key2 = 1000;
        const {selectedElement} = this.props.elements;
        if(selectedElement.hasOwnProperty('elemType')){
            list.push(
                <PropertyItem
                    key={key++}
                    property="Content"
                    val={selectedElement.content}
                    handleChange={(e) => this.updateElementContent(selectedElement.id, e)}
                />
            );

            for(let [property, val] of Object.entries(selectedElement.style)){
                

                if(property.includes("Color")){
                    list.push(
                        <PropertyItemColor
                            key={key2--}
                            property={property}
                            val={val}
                            handleChange={(e) => this.handleChange(selectedElement.id, e, property)}
                        />
                    );
                } else if(property.includes("float")) {
                    list.push(
                        <PropertyItemRadioFloat
                            key={key2--}
                            property={property}
                            isChecked={val}
                            handleChange={(e) => this.handleChange(selectedElement.id, e, property)}
                        />
                    );
                } 
                else if(property.includes("Align")) {
                    list.push(
                        <PropertyItemRadioTextAlign
                            key={key2--}
                            property={property}
                            isChecked={val}
                            handleChange={(e) => this.handleChange(selectedElement.id, e, property)}
                        />
                    );
                }
                else {
                    list.push(
                        <PropertyItem
                            key={key2--}
                            property={property}
                            val={val}
                            handleChange={(e) => this.handleChange(selectedElement.id, e, property)}
                        />
                    );
                }
                
            }

        }
        return list;
    }
    
    render(){
        const {selectedElement} = this.props.elements;
        const isSelect = selectedElement.hasOwnProperty('elemType');
        return(
            <div className="propertyListContainer">
            <h3>Property editor</h3>
            {isSelect ? null : <CanvasPropertyEditor />}
                <ul className="propertyListBox style-3" >
                {this.renderPropertyItem()}
                </ul>
            </div>
        )
    }
    
}

const mapStateToProps = ({elements}) => {
    return {elements};
}

export default connect(mapStateToProps, actions)(PropertyBox);
