import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import defaultStyle from './Assets/defaultStyles.json';
import Tester from './Tester';
import { Button, Input, Switch, Tooltip, Tag, Popconfirm } from 'antd';
import ScriptPopUp from './ScriptPopUp';


class ToolBox extends Component {

    constructor(props) {
        super(props);
        this.state = { showWindowTester: false, showPopUpScript: false}
        // eslint-disable-next-line
        this.urlRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    }


    componentDidMount() {
        window.addEventListener('beforeunload', () => {
            this.closeWindowTester();
        });
    }

    toggleWindowTester() {
        this.setState({ showWindowTester: !this.state.showWindowTester });
    }

    closeWindowTester() {
        this.setState({ showWindowTester: false });
    }

    handleChangeUrl(url) {
        this.props.handleChangeUrl(url);
    }


    addElement(elemType) {
        switch (elemType) {
            case 'img':
                return this.props.addElement(elemType, defaultStyle.img.style, defaultStyle.img.content);
            case 'h1':
                return this.props.addElement(elemType, defaultStyle.h1.style, defaultStyle.h1.content);
            case 'h2':
                return this.props.addElement(elemType, defaultStyle.h2.style, defaultStyle.h2.content);
            case 'p':
                return this.props.addElement(elemType, defaultStyle.p.style, defaultStyle.p.content);
            case 'div':
                return this.props.addElement(elemType, defaultStyle.div, "Temporary background");
            case 'form':
                return this.props.addElement(elemType, defaultStyle.form.style, defaultStyle.form.content);
            default:
                return this.props.addElement(elemType);
        }

    }
    refreshToNew() {
        this.props.clearState();
        this.props.initCanvas();
        localStorage.clear();
    }

    handleRemoveCanvas(canvas) {
        this.props.removeCanvas(canvas.id, canvas.children);
    }

    render() {

        let canvaslist = this.props.mainCanvas.canvases.map((canvas, index) => {
            return (
                <Tooltip key={canvas.id} title={canvas.name}>
                    <Tag
                      onClick={() => this.props.selectCanvas(canvas.id)}
                      closable={index !== 0}
                      afterClose={() => this.handleRemoveCanvas(canvas)}
                      color={this.props.mainCanvas.selectedCanvas.id === canvas.id ? '#40a9ff' : null}
                      
                    >
                        {canvas.name}
                    </Tag >
                </Tooltip>

            )

        });
        const { name, transitionToNext, delay, style } = defaultStyle.canvas;
        let { url } = this.props.mainCanvas;
        return (

            <div className="toolboxBox">
                {this.props.script.visible ? <ScriptPopUp /> : null }               
                <Tooltip key="h1" title="Add heading 1 element"><Button onClick={() => this.addElement("h1")} className="toolBoxElement">Header 1</Button></Tooltip >
                <Tooltip key="h2" title="Add heading 2 element"><Button onClick={() => this.addElement("h2")} className="toolBoxElement">Header 2</Button></Tooltip >
                <Tooltip key="text" title="Add text element"><Button onClick={() => this.addElement("p")} className="toolBoxElement">Text</Button></Tooltip >
                <Tooltip key="image" title="Add image element"><Button onClick={() => this.addElement("img")} className="toolBoxElement">Image</Button></Tooltip >
                <Tooltip key="spacer" title="Add spacer element"><Button onClick={() => this.addElement("div")} className="toolBoxElement">Spacer</Button></Tooltip >
                <Tooltip key="form" title="Add form element"><Button onClick={() => this.addElement("form")} className="toolBoxElement">Form</Button></Tooltip >
                <Button key="addcanvas" className="toolBoxElement" disabled={this.props.mainCanvas.canvases.length === 2} onClick={() => this.props.addCanvas(name, transitionToNext, delay, style)}>Add new Canvas</Button>
                {canvaslist}

                    <Popconfirm style={{zIndex: '800!important'}} title="Your elements will be removed. Are you sure to continue?" onConfirm={() =>this.refreshToNew()} okText="Yes" cancelText="No">
                        <Button className="toolBoxElement" >Fresh start</Button>
                        </Popconfirm>

                    

                    <Tooltip placement="bottom" title="for example http://mywebsite.com/">
                        <Input
                            style={{ width: '300px', marginRight: '5px'}}
                            addonBefore="URL"
                            onChange={e => this.handleChangeUrl(e.target.value)}
                            value={this.props.mainCanvas.url} />
                    </Tooltip>
                    <Switch
                        checked={this.state.showWindowTester}
                        style={{ marginRight: "5px" }}
                        checkedChildren="Stop test"
                        unCheckedChildren="Run test"
                        disabled={!url.match(this.urlRegex)}
                        onChange={() => this.toggleWindowTester()}
                    />
                    <Button icon="check" onClick={() => this.props.showScriptPopUp(true)} className="toolBoxElement" disabled={!url.match(this.urlRegex)}>Generate script</Button>

                    {this.state.showWindowTester && (<Tester src={this.props.mainCanvas.url} closeWindowTester={() => this.closeWindowTester()}></Tester>)}

            </div>
        )
    }
}
const mapStateToProps = ({ mainCanvas, script}) => {
    return { mainCanvas, script };
}

export default connect(mapStateToProps, actions)(ToolBox);