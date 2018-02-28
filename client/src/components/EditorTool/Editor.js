import React, {Component} from 'react';
import ToolBox from './ToolBox';
import PropertyBox from './PropertyBox';
import Preview from './Preview';
import {connect} from 'react-redux';

class Editor extends Component {

    render() {
        const editElement = this.props.elements.selectedElement;
        const editCanvas = this.props.mainCanvas;
        const fontList = this.props.elements.fonts;
        const animationList = this.props.mainCanvas.animationList;
        let props = Object.keys(this.props.elements.selectedElement).length === 0 ? editCanvas : editElement;
        let selectList = Object.keys(this.props.elements.selectedElement).length === 0 ? animationList : fontList;
       
        return(
            <div className="editorBoxContainer">
               <ToolBox />
               <PropertyBox forEdit={props} selectList={selectList}/>
               <Preview />
            </div>
        )
    }
}

const mapStateToProps = ({elements, mainCanvas}) => {
    return {elements, mainCanvas};
}

export default connect(mapStateToProps)(Editor);