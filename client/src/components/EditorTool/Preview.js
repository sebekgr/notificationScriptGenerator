import React, {Component} from 'react';
import MainCanvas from './Assets/MainCanvas';
import {connect} from 'react-redux';
import * as actions from '../../actions/editor';


class Preview extends Component {

    render() {
        return (
            <div className="previewBox">
                <MainCanvas />
            </div>
        )
    }
}

export default connect(null, actions)(Preview);