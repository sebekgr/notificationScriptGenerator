import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/editor';
import ComponentElement from './Assets/ComponentElement';

class MainCanvas extends Component {

    deleteElement(id){
        this.props.deleteElement(id);
    }

    selectElement(id) {
        this.props.selectElement(id);
    }

    render(){
        const isActive = this.props.elements.selectedElement.id;
         const elements = this.props.elements.elements.map( element => {
             return [
                <ComponentElement active={isActive === element.id} onSelect={()=>this.selectElement(element.id)} key={element.id} {...element}/>,
                <button onClick={() => this.deleteElement(element.id)} className="deleteComponentBtn" key={element.id*2} >X</button>
             ]
         })

        return(
            <div className="mainCanvas" style={this.props.mainCanvas}>
                {elements}
            </div>
        );
       
    }

}



const mapStateToProps = ({mainCanvas, elements}) => {
    return {mainCanvas, elements};
}

export default connect(mapStateToProps, actions)(MainCanvas);