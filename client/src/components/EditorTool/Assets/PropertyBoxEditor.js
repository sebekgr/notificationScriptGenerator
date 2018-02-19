import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/editor';

class PropertyBoxEditor extends Component {


    updateElement(id, e, k) {
        this.props.updateElement(id, e.target.value, k);
    }
    updateElementContent(id, e) {
        this.props.updateElementContent(id, e.target.value);
    }

    renderList(ident) {
        let list = [];
        let {selectedElement} = this.props.elements;
        if(selectedElement.hasOwnProperty('elemType') ) {
            let id = selectedElement.id;
            let i = 1;
            let j = 100;
            list.push(<p key={id}>Content</p>,
                     <input key={id+j} defaultValue={selectedElement.content} onChange={(e)=>this.updateElementContent(id, e)}/>)
           for(let [k, val] of Object.entries(selectedElement.style)){
               
            list.push(
                <p key={i++}>{k.toLowerCase()}</p>,  <input key={j--} defaultValue={val} onChange={(e) => this.updateElement(id, e, k)} />);

           }
        }
        else{
            return false;
        }
        return list;
        
    }
    render() {
        let ident = this.props.elements.selectedElement.id;

        return (
            <div>
                <p>PROPERTY BOX</p>
                {ident ? this.renderList(ident) : "Nothing selected yet"}
            </div>
        )
    }
}

const mapStateToProps = ({elements}) => {
    return {elements};
}

export default connect(mapStateToProps, actions)(PropertyBoxEditor);