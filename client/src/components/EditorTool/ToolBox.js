import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';
import defaultStyle from './Assets/defaultStyles.json';
import Tester from './Tester';

class ToolBox extends Component {

    constructor(props){
        super(props);
        this.state = {showWindowTester: false}
        this.urlRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    }
    

    componentDidMount(){
        window.addEventListener('beforeunload', () => {
            this.closeWindowTester();
          });
    }

    toggleWindowTester(){
        this.setState({showWindowTester: !this.state.showWindowTester});
    }

    closeWindowTester(){
        this.setState({showWindowTester: false});
    }

    handleChangeUrl(url){
        this.props.handleChangeUrl(url);
        
    }


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
            case 'form':
                return this.props.addElement(elemType, defaultStyle.form.style, defaultStyle.form.content);
            default:
                return this.props.addElement(elemType);
        }
     
    }

    refreshToNew(){
        localStorage.clear();
    }

    render() {
        
        let canvaslist = this.props.mainCanvas.canvases.map( canvas => {
          
            return(
             <li
                onClick={() => this.props.selectCanvas(canvas.id)}
                key={canvas.id} 
                className="canvasTag">
                {canvas.name}
            </li>
            );
        });
        const {name, transitionToNext, delay, style} = defaultStyle.canvas;
        let {url} = this.props.mainCanvas;
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
                    <li className="toolBoxItem">
                        <button onClick={() => this.addElement("form")} className="toolBoxElement">Form</button>
                    </li>
                
                </ul>
                
                <div>
                    &nbsp;
                    <button >Generate script</button>
                    <button onClick={() => this.refreshToNew()}>Start new</button>
                    <button disabled={!url.match(this.urlRegex)} onClick={() => this.toggleWindowTester()}>{this.state.showWindowTester ? 'Stop ' : 'Run ' }test</button>
                    <input onChange={e => this.handleChangeUrl(e.target.value)} className="urlInput" placeholder="Provide your website url here..." />
                    <button disabled={this.props.mainCanvas.canvases.length === 2} onClick={() => this.props.addCanvas(name, transitionToNext, delay, style)}>Add new Canvas</button>
                </div>
                <ul className="canvasList">
                    {canvaslist}
                </ul>
                    {this.state.showWindowTester && (
                        <Tester src={this.props.mainCanvas.url} closeWindowTester={() => this.closeWindowTester()}>

                            
                        </Tester>
                    )}
            </div>
        )
    }
}
const mapStateToProps = ({mainCanvas}) => {
    return {mainCanvas};
}

export default connect(mapStateToProps, actions)(ToolBox);