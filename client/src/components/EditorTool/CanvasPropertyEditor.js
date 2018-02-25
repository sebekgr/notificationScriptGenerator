import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/';
import PropertyItem from './Assets/PropertyItem';
import PropertyItemSelect from './Assets/PropertyItemSelect';

class CanvasPropertyEditor extends Component {

    handleChange(e, prop){
        this.props.updateCanvas(e.target.value, prop);
    }

    handleChangeAnimation(e) {
        this.props.changeAnimation(e.target.value);
    }

    renderPropertyItem(){
        let list = [];
        let key2 = 1000;
        const {mainCanvas} = this.props;

             for(let [property, val] of Object.entries(mainCanvas.style)){
                
                 list.push(
                     <PropertyItem
                         key={key2--}
                         property={property}
                         val={val}
                        handleChange={(e) => this.handleChange(e, property)}
                     />
                 );
             }

         return list;
    }


    render() {
        return(
            <div>
                CanvasPropertyEditor
                <ul className="propertyListBox style-3" >
                <select className="selectAnimation" onChange={e => this.handleChangeAnimation(e)} >
                    <option value="flip">Flip</option>
                    <option value="fadeInDown">Fade in down</option>
                </select>
                {this.renderPropertyItem()}
                </ul>               
            </div>
        );
    }
}


const mapStateToProps = ({mainCanvas}) => {
    return {mainCanvas};
}

export default connect(mapStateToProps, actions)(CanvasPropertyEditor);