import React, { Component } from 'react';
import { Modal, Icon, Input } from 'antd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import animationList from './Assets/animationList';

const makeStyle = string => {
    return string.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

class ScriptPopUp extends Component {

    state = { copied: false }


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
            console.log(style);
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
                    <Icon type="loading" style={{ fontSize: "56px", color: '#1890ff' }} />
                </div>);
        } else if (status === 'success') {
            return (
                <div className="modalContent">
                    <h3>SUCCESS !</h3>
                    <Icon type="smile" style={{ fontSize: "56px", color: 'green' }} />
                    <p>Now please copy link below and place into your index.html file</p>
                    <CopyToClipboard onCopy={() => this.setState({ copied: true })} text={this.props.script.generatedUrl}>
                        <Input
                            defaultValue={this.props.script.generatedUrl}
                            onFocus={e => e.target.select()}
                        />
                    </CopyToClipboard>
                    {this.state.copied ? <span style={{ color: 'green' }}>Link has been copied to clipboard</span> : null}
                </div>
            )
        } else {
            return (
                <div className="modalContent">
                    <h3>Error !</h3>
                    <Icon type="meh" style={{ fontSize: "56px", color: 'red' }} />
                    <p>Something went wrong. Please try again soon</p>
                </div>
            )

        }
    }

    onClose() {
        this.props.showScriptPopUp(false)
        this.setState({ copied: false })
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