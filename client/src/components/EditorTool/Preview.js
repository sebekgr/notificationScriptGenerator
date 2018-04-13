import React, { Component } from 'react';
import MainCanvas from './MainCanvas';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import { Layout} from 'antd';
const {Content} = Layout;

class Preview extends Component {
    componentDidMount() {
        window.addEventListener('beforeunload', () => {
            this.savingDate();
        });

        if (!localStorage.length) {
            this.props.initCanvas();
        } else {


            this.props.setHydrateCanvas({
                canvases: JSON.parse(localStorage.getItem("canvases")),
                overlay: JSON.parse(localStorage.getItem("overlay")),
                url: JSON.parse(localStorage.getItem("url"))
            });

            this.props.initCanvas();
            this.props.setHydrateElements(JSON.parse(localStorage.getItem("elements")));
        }
    }

    savingDate() {
        localStorage.setItem("canvases", JSON.stringify(this.props.mainCanvas.canvases));
        localStorage.setItem("overlay", JSON.stringify(this.props.mainCanvas.overlay));
        localStorage.setItem("elements", JSON.stringify(this.props.elements.elements));
        localStorage.setItem("url", JSON.stringify(this.props.mainCanvas.url));
    }

    render() {
        return (
            <Content className="contentCanvasWrapper" style={{height: 'auto', backgroundColor: this.props.mainCanvas.overlay ? 'rgba(0,0,0,0.5)' : null }}>
                <div className="editorMainCanvasWrapper">
                    <MainCanvas current={this.props.selectedCanvas} />
                </div>

            </Content>
        )
    }
}

const mapStateToProps = ({ mainCanvas, elements }) => {
    return { mainCanvas, elements };
}
export default connect(mapStateToProps, actions)(Preview);