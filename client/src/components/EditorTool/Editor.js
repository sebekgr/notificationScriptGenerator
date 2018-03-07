import React, {Component} from 'react';
import ToolBox from './ToolBox';
import PropertyBox from './PropertyBox';
import Preview from './Preview';
import {connect} from 'react-redux';

class Editor extends Component {

    render() {
        return(
            <div className="editorBoxContainer">
               <ToolBox />
               <PropertyBox/>
               <Preview />
            </div>
        )
    }
}

const mapStateToProps = ({elements, mainCanvas}) => {
    return {elements, mainCanvas};
}

export default connect(mapStateToProps)(Editor);