import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/editor';
import TextComponent from './TextComponent';
import IMGComponent from './IMGComponent';
import H1Component from './H1Component';
import H2Component from './H2Component';

class MainCanvas extends Component {

    state = {
        isActive: false
    }

    toggle(){
        const currState = this.state.isActive;
        this.setState({isActive: !currState});
    }

    deleteElement(id){
        this.props.deleteElement(id);
    }

    selectElement(id) {
        this.props.selectElement(id);
     }

    renderElements(){

        const {elements} = this.props.elements;

        const forRender = elements.map( props => {
            switch(props.elemType) {
                
                case 'p':
                    return <TextComponent {...props} key={props.id} onSelect={()=>this.selectElement(props.id)} onDelete={() =>this.deleteElement(props.id)} />
                case 'h1':
                    return <H1Component {...props} key={props.id} onSelect={()=>this.selectElement(props.id)} onDelete={() =>this.deleteElement(props.id)} />    
                case 'h2':
                    return <H2Component {...props} key={props.id} onSelect={()=>this.selectElement(props.id)} onDelete={() =>this.deleteElement(props.id)} />
                case 'img':
                    return <IMGComponent {...props} key={props.id} onSelect={()=>this.selectElement(props.id)} onDelete={() =>this.deleteElement(props.id)} />

                default:
                    return <p key={props.id++}>Add some elements </p>
            }
        });
        return forRender
    }
  
    render(){
        return(
            <div ref="mainCanvas"
                className="mainCanvas"
                style={this.props.mainCanvas}>

            {this.state.isActive ? 'aktywny' : null}
            <button onClick={()=>this.props.resetSelected()}>btn</button>
            {this.renderElements()}
            </div>
        );
       
    }

}



const mapStateToProps = ({mainCanvas, elements}) => {
    return {mainCanvas, elements};
}

export default connect(mapStateToProps, actions)(MainCanvas);