import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/editor';


const defaultIMG = {
    style: {
        width: "100px",
        height: "auto",
        float: "none",
        textAlign: "center",
        borderColor: "black",
        border: "1px solid red",
        borderRadius: "3px",
        margin: "auto",
        padding: "auto"
    },
    content: "https://thesocietypages.org/socimages/files/2009/05/nopic_192.gif"
}


class ToolBox extends Component {


    addElement(elemType, style = {fontSize: "100px", color: "red", textDecoration: "underline"}, content="provide your text here"){
        
        if(elemType === "img") {
            this.props.addElement(elemType, defaultIMG.style,  defaultIMG.content);
        } else if(elemType === "p"){
            this.props.addElement(elemType, style = {color: "black"}, content);
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