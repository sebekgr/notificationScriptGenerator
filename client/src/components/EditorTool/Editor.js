import React, {Component} from 'react';
import ToolBox from './ToolBox';
import PropertyBox from './PropertyBox';
import Preview from './Preview';

class Editor extends Component {

    render() {
        return(
            <div className="editorBoxContainer">
               <ToolBox />
               <PropertyBox />
               <Preview />
            </div>
        )
    }
}

export default Editor;