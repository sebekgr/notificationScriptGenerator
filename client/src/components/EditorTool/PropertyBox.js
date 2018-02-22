import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/editor';
import PropertyItem from './Assets/PropertyItem';

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
        return list;
    }
    
    render(){
        return(
            <div className="propertyList">
                {this.renderPropertyItem()}
            </div>
        )
    }
    
}

const mapStateToProps = ({elements}) => {
    return {elements};
}

export default connect(mapStateToProps, actions)(PropertyBox);

// updateElement(id, e, k) {
//     this.props.updateElement(id, e.target.value, k);
// }
// updateElementContent(id, e) {
//     this.props.updateElementContent(id, e.target.value);
// }

// renderList(ident) {
//     let list = [];
//     let {selectedElement} = this.props.elements;
//     if(selectedElement.hasOwnProperty('elemType') ) {
//         let id = selectedElement.id;
//         let i = 1;
//         let j = 100;
//         list.push(<p key={id}>Content</p>,
//                  <input key={id+j} defaultValue={selectedElement.content} onChange={(e)=>this.updateElementContent(id, e)}/>)
//        for(let [k, val] of Object.entries(selectedElement.style)){
           
//         list.push(
//             <p key={i++}>{k.toLowerCase()}</p>,  <input key={j--} defaultValue={val} onChange={(e) => this.updateElement(id, e, k)} />);

//        }
//     }
//     else{
//         return false;
//     }
//     return list;
    
// }