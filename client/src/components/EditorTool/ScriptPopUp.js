import React, { Component } from 'react';
import { Modal, Icon } from 'antd';
import CopyClipboard from './Assets/CopyClipboard';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import animationList from './Assets/animationList';
import wpImg from './Assets/wp.jpg';

const makeStyle = string => {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

class ScriptPopUp extends Component {

    componentDidMount() {
        const canvases = this.props.mainCanvas.canvases;
        const url = this.props.mainCanvas.url;
        const overlay = this.props.mainCanvas.overlay;
        const elements = this.props.elements.elements;
        const user = this.props.auth._id;

        let readyElements = JSON.parse(JSON.stringify(elements));

        readyElements.forEach(element => {
            let style = {}
            let temp = {}
            if (element.elemType === "form") {
                for(let i = 0; i < Object.keys(element.style).length; i++) {
                    let styleName = Object.keys(element.style)[i];
                    let obj = element.style[styleName];
                    temp = {};
                    for(let [key, value] of Object.entries(obj)) {
                        temp[makeStyle(key)] = value;
                    }
                    style[styleName] = temp;
                }
                element.style = style;

            } else {
                for (let [key, value] of Object.entries(element.style)) {
                    style[makeStyle(key)] = value;

                }
                element.style = style;
            }
        });
        const shadow = '-1px 1px 50px 10px rgba(0,0,0,0.5)';
        let animation ='';
        let canvasesReady = JSON.parse(JSON.stringify(canvases));
        canvasesReady.forEach(canvas => {
            let style = {};
            canvas.children = readyElements.filter(element => canvas.children.includes(element.id));
            animation += animationList[canvas.style.animationName];
            for(let [key, value] of Object.entries(canvas.style)) {
                style[makeStyle(key)] = value;
            }
            overlay ? null : (style = Object.assign({}, style, {'-webkit-box-shadow': shadow, '-moz-box-shadow': shadow, 'box-shadow': shadow}) )
            canvas.style = style;
        });

        this.props.generateScript(canvasesReady, url, overlay, user, animation);
    }


    renderModal(status) {
        if (status === 'info') {
            return (
                <div className="modalContent">
                    <h3>Proccesing with request</h3>
                    <Icon type="loading" style={{ color: '#1890ff' }} />
                </div>);
        } else if (status === 'success') {
            return (
                <div className="modalContent">
                    <h3>SUCCESS !</h3>
                    <Icon type="smile" className="modalIcon"  style={{ color: 'green'}} />
                    <CopyClipboard text={this.props.script.generatedUrl} />
                    <p>Now please copy link and place into your <strong>HEAD</strong> section in <strong>index.html</strong> file</p>
                    <p>If you are wordpress user copy script link into <strong>header.php</strong> in your wp theme</p>
                    <img src={wpImg} alt="wordpress"/>                
                  
                </div>
            )
        } else {
            return (
                <div className="modalContent">
                    <h3>Error !</h3>
                    <Icon type="meh" style={{ color: 'red' }} />
                    <p>Something went wrong. Please try again soon</p>
                </div>
            )

        }
    }

    onClose() {
        this.props.showScriptPopUp(false)
        this.setState({ copied: false })
    }

    componentWillUnmount() {
        this.props.closeScriptPopUp();
    }

    render() {

        return (
            <Modal
                wrapClassName="vertical-center-modal"
                visible={true}
                onCancel={() => this.onClose()}
                footer={null}
            >
                {this.renderModal(this.props.script.status)}
            </Modal>
        )

    }
}

const mapStateToProps = ({ mainCanvas, elements, auth, script }) => {
    return { mainCanvas, elements, auth, script };
}

export default connect(mapStateToProps, actions)(ScriptPopUp);