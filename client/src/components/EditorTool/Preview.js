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
                <div style={{padding: '30px', minHeight: '100%', minWidth: '100%', background: this.props.mainCanvas.overlay ? 'rgba(0,0,0,0.5)' : null}}>
                <MainCanvas current={this.props.selectedCanvas}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({mainCanvas}) => {
    return {mainCanvas};
}
export default connect(mapStateToProps, actions)(Preview);