import React, {Component} from 'react';
import MainCanvas from './MainCanvas';

class Preview extends Component {

    render() {
        return (
            <div className="previewBox style-3" >
                <MainCanvas />
            </div>
        )
    }
}

export default Preview;