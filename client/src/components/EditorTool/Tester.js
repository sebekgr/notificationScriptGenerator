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
        this.state = { ms: 0, showCanvas: true, canvasNr: 0 };
    }

    async onSubmit(e) {
        e.preventDefault();
        try{
            let mail = e.target[0].value;
            let res = await axios.post('http://localhost:9000/api/add', { "mail": mail });
            console.log(res.data);
        
        if (this.props.mainCanvas.canvases.length > 1) {
            this.setState({ canvasNr: 1 });

            this.secondInterval = setInterval(() => this.delay(1, this.secondInterval), 1000);
        } else {
            this.externalWindow.alert("Thank you");
            this.onCloseCanvas();
        }
        } catch(e) {
            this.externalWindow.alert("Something went wrong. Please try again soon");
            console.error(e);
        }
        

        
    }



renderReadyCanvas() {
    let tab = [];
    let canvasChildren = this.props.mainCanvas.canvases[this.state.canvasNr].children;
    let totalElements = this.props.elements.elements;
    let canvasStyle = this.props.mainCanvas.canvases[this.state.canvasNr].style;
    if (!this.props.mainCanvas.overlay) {
        canvasStyle = Object.assign({}, canvasStyle, { boxShadow: '-1px 1px 50px 10px rgba(0,0,0,0.25)', WebkitboxShadow: '-1px 1px 50px 10px rgba(0,0,0,0.25)' });
    } else { canvasStyle }
    if (canvasChildren) {
        for (let i = 0; i < canvasChildren.length; i++) {
            tab.push(totalElements.find(elem => elem.id === canvasChildren[i]));
        }
    }
    let children = tab.map((element, index) => {
        return <ComponentElementTester onSubmit={(e) => this.onSubmit(e)} key={index} {...element} />
    });
    return (
        <div key="kcanvas" style={{ padding: '30px 0', overflow: 'auto', background: this.props.mainCanvas.overlay ? 'rgba(0,0,0,0.5)' : null, position: 'fixed', justifyContent: 'center', alignContent: 'center', zIndex: '99', margin: 'auto', top: '0', bottom: '0', left: '0', right: '0', display: 'flex' }}>
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
    return [<iframe title="Tester" key="kframe" src={this.props.src} width="100%" height="100%" frameBorder="0" />,
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
        if (activeCanvas === 1) { this.onCloseCanvas() };
        clearInterval(name);
    }
}

render() {
    return ReactDOM.createPortal(this.renderTester(), this.containerEl);
}

componentDidMount() {

    // if(this.props.mainCanvas.canvases[this.canvasNr].style){
    //     var animationName = this.props.mainCanvas.canvases[this.canvasNr].style.animationName
    // }
    //let animationName = this.props.mainCanvas.canvases[this.canvasNr].style.animationName ;
    //console.log(animationName);
    //this.testerStyle.innerText += animationName;
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