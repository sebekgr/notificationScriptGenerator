import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../../actions/editor';
import ReactDOM from 'react-dom';

class MainCanvas extends Component {

    componentDidMount(){
        this.props.getCanvas();
    }

    selectHandler(){
        const node = ReactDOM.findDOMNode(this.refs.mainCanvas);
        node.classList.toggle('active');
    }

    deleteElement(id){
        this.props.deleteElement(id);
    }

    

  
    render(){
        const components = this.props.elements.elements.map( ({elemType: Component, style, content, id}) => {
            return <Component key={id} style={style} onClick={() => this.deleteElement(id)}> {content} </Component>
        });
    
            console.log(this.props.elements.elements);
    


       return(
            <div ref="mainCanvas"
                className="mainCanvas"
                style={this.props.mainCanvas}>

               {components}
            </div>
        );
        
    }

}



const mapStateToProps = ({mainCanvas, elements}) => {
    return {mainCanvas, elements};
}

export default connect(mapStateToProps, actions)(MainCanvas);