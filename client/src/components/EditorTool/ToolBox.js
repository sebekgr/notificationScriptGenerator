import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import defaultStyle from './Assets/defaultStyles.json';

class ToolBox extends Component {

    addElement(elemType){

        switch(elemType) {
            case 'img':
                return this.props.addElement(elemType, defaultStyle.img.style, defaultStyle.img.content);
            case 'h1':
                return this.props.addElement(elemType, defaultStyle.h1.style, defaultStyle.h1.content);
            case 'h2':
                return this.props.addElement(elemType, defaultStyle.h2.style, defaultStyle.h2.content);
            case 'p':
                return this.props.addElement(elemType, defaultStyle.p.style, defaultStyle.p.content);
            case 'span':
                return this.props.addElement(elemType, defaultStyle.span, "Temporary background");
            default:
                return this.props.addElement(elemType);
        }
     
    }

    render() {
        return (
            <div className="toolBoxContainer">
                <h3>TOOLBOX</h3>
                <ul className="toolBoxList">
                
                    <li className="toolBoxItem">
                        <button onClick={() => this.addElement("h1")} className="toolBoxElement">Header 1</button>
                    </li>
                    <li className="toolBoxItem">
                        <button onClick={() => this.addElement("h2")} className="toolBoxElement">Header 2</button>
                    </li>
                    <li className="toolBoxItem">
                        <button onClick={() => this.addElement("p")} className="toolBoxElement">Text</button>
                    </li>
                    <li className="toolBoxItem">
                        <button onClick={() => this.addElement("img")} className="toolBoxElement">Image</button>
                    </li>
                    <li className="toolBoxItem">
                        <button onClick={() => this.addElement("span")} className="toolBoxElement">Spacer</button>
                    </li>
                
                </ul>
                <div>
                    &nbsp;
                    <button >Generate script</button>
                    <button >Run test</button>
                    <input className="urlInput" placeholder="Provide your website url here..." />
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(ToolBox);