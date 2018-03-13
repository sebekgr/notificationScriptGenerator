import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import ComponentElementTester from './Assets/ComponentElementTester';
import axios from 'axios';

class Tester extends Component {

    constructor(props) {
        super(props);
        this.containerEl = document.createElement('div');
        this.testerStyle = document.createElement('style');
        this.externalWindow = null;
        this.state = { ms: 0, showCanvas: false, canvasNr: 0 };
    }

    onSubmit(e){
        e.preventDefault();
        console.log(e.target[0].value);
        if(this.props.mainCanvas.canvases.length > 1){
            this.setState({canvasNr: 1});
            this.secondInterval = setInterval(() => this.delay(1, this.secondInterval), 1000);
        } else {
            this.externalWindow.alert("Thank you");
            this.onCloseCanvas();
        }
    }

    renderReadyCanvas() {
        let tab = [];
        let canvasChildren = this.props.mainCanvas.canvases[this.state.canvasNr].children;
        let totalElements = this.props.elements.elements;
        let canvasStyle = this.props.mainCanvas.canvases[this.state.canvasNr].style;
        if (!this.props.mainCanvas.overlay) {
             canvasStyle = Object.assign({}, canvasStyle, { boxShadow: '-1px 1px 50px 10px rgba(0,0,0,0.25)', WebkitboxShadow: '-1px 1px 50px 10px rgba(0,0,0,0.25)' });
        } else { canvasStyle}
        if (canvasChildren) {
            for (let i = 0; i < canvasChildren.length; i++) {
                tab.push(totalElements.find(elem => elem.id === canvasChildren[i]));
            }
        }
        let children = tab.map((element, index) => {
            return <ComponentElementTester onSubmit={(e) =>this.onSubmit(e)} key={index} {...element} />
        });
        console.log(tab);

        return (
            <div key="kcanvas" style={{padding: '30px 0',overflow: 'auto',background: this.props.mainCanvas.overlay ? 'rgba(0,0,0,0.5)' : null, position: 'fixed', justifyContent: 'center', alignContent: 'center', zIndex: '99', margin: 'auto', top: '0', bottom: '0', left: '0', right: '0', display: 'flex' }}>
                <div style={canvasStyle} > {children}  </div>
                <button onClick={() => this.onCloseCanvas()} style={{ alignSelf: 'start' }}>Close</button>
            </div>
        );
    }

    onCloseCanvas() {
        this.setState({ showCanvas: false });
    }

    renderTester() {
        let canvas = this.state.showCanvas ? this.renderReadyCanvas() : null
        console.log(canvas);
        return [<iframe title="Tester" key="kframe" src={this.props.src} width="100%" height="100%"  frameBorder="0" />,
            canvas
        ]
    }

    delay(activeCanvas, name) {
        this.setState(prevState => ({
            ms: prevState.ms + 1000
        }));
        if (this.state.ms >= this.props.mainCanvas.canvases[activeCanvas].delay.slice(0, -2)) {
                this.setState({
                    showCanvas: true,
                    ms: 1000
                });
            if(activeCanvas === 1) {this.onCloseCanvas()};
            clearInterval(name);
        }
    }

    render() {
        return ReactDOM.createPortal(this.renderTester(), this.containerEl);
    }

    componentDidMount() {
        const str = `@-webkit-keyframes bounce{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05);}to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}}@keyframes bounce{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05);}to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}}`;
        this.testerStyle.innerText += str;
        this.containerEl.style.cssText = "width:100%;height:100%;overflow:auto;margin:0;";
        this.externalWindow = window.open('', '', 'width:1300;height:600;left=0,top=0;margin:0;padding:0');
        this.externalWindow.document.body.appendChild(this.containerEl);
        this.externalWindow.document.body.style.cssText = "margin:0;padding:0;";
        this.externalWindow.document.head.appendChild(this.testerStyle);
        this.externalWindow.addEventListener('beforeunload', () => {
        this.props.closeWindowTester();
        });
       this.firstInterval = setInterval(() => this.delay(0, this.firstInterval), 1000);
    }

    componentWillUnmount() {
        this.externalWindow.close();
    }
}

const mapStateToProps = ({ mainCanvas, elements }) => {
    return { mainCanvas, elements };
}

export default connect(mapStateToProps, actions)(Tester);