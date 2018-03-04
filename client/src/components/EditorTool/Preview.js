import React, {Component} from 'react';
import MainCanvas from './MainCanvas';
import {connect} from 'react-redux';
import * as actions from '../../actions/index';

class Preview extends Component {

    componentDidMount(){
        this.props.initCanvas();
    }

    render() {
        return (
            <div className="previewBox style-3" >
                <MainCanvas current={this.props.selectedCanvas}/>
            </div>
        )
    }
}

const mapStateToProps = ({mainCanvas}) => {
    return {mainCanvas};
}
export default connect(mapStateToProps, actions)(Preview);