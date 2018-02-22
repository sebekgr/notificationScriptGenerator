import React, {Component} from 'react';
import MainCanvas from './MainCanvas';
import {connect} from 'react-redux';
import * as actions from '../../actions/editor';


class Preview extends Component {

    resetSelected() {
        this.props.resetSelected();
    }

    render() {
        return (
            <div className="previewBox" >
                <MainCanvas />
            </div>
        )
    }
}

export default connect(null, actions)(Preview);