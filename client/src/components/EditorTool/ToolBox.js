import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/editor';


class ToolBox extends Component {


    addElement(elemType, style = {fontSize: "100px", color: "red", textDecoration: "underline", border: "1px solid red"}, content="provide your text here"){
        
        if(elemType === "img") {
            this.props.addElement(elemType, style = {border: "20px solid orange"});
        } else {
            this.props.addElement(elemType, style, content);
        }

        
    }

    render() {
        return (
            <ul className="toolBox">
            TOOLBOX
                <li className="toolBoxItem">
                    <div onClick={() => this.addElement("h1")} className="toolBoxElement">Header 1</div>
                </li>
                <li className="toolBoxItem">
                    <div onClick={() => this.addElement("h1")} className="toolBoxElement">Header 2</div>
                </li>
                <li className="toolBoxItem">
                    <div onClick={() => this.addElement("p")} className="toolBoxElement">Text</div>
                </li>
                <li className="toolBoxItem">
                    <div onClick={() => this.addElement("img")} className="toolBoxElement">Image</div>
                </li>
            
            </ul>
        )
    }
}

export default connect(null, actions)(ToolBox);