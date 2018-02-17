import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/editor';


class ToolBox extends Component {


    addElement(elemType, style = {fontSize: 30, color: "red"}, content="provide your text here"){
        this.props.addElement(elemType, style, content);
    }

    render() {
        return (
            <ul className="toolBox">
                <li className="toolBoxItem">
                    <div onClick={() => this.addElement("h1")} className="toolBoxElement">Header 1</div>
                </li>
                <li className="toolBoxItem"><div className="toolBoxElement">Header 2</div></li>
                <li className="toolBoxItem">
                    <div onClick={() => this.addElement("p")} className="toolBoxElement">Text</div>
                </li>
                <li className="toolBoxItem"><div className="toolBoxElement">Image</div></li>
            
            </ul>
        )
    }
}

export default connect(null, actions)(ToolBox);