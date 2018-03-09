import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import ComponentElementTester from './Assets/ComponentElementTester';

class Tester extends Component {

    constructor(props) {
        super(props);
        this.containerEl = document.createElement('div');
        this.testerStyle = document.createElement('style');
        this.externalWindow = null;
        this.state = { ms: 0, showCanvas: false };
    }

    renderReadyCanvas() {
        let tab = [];
        let canvasChildren = this.props.mainCanvas.selectedCanvas.children;
        let totalElements = this.props.elements.elements;
        const canvasStyle = this.props.mainCanvas.canvases[0].style;
        let style = Object.assign({}, canvasStyle, { position: 'absolute', zIndex: '99', margin: 'auto', top: '0', left: '0', bottom: '0', right: '0'});
        if (canvasChildren) {
            for (let i = 0; i < canvasChildren.length; i++) {
                tab.push(totalElements.find(elem => elem.id === canvasChildren[i]));
            }
          
        }
        let children = tab.map((element, index) => {
            return <ComponentElementTester key={index} {...element} />
        });



        return <div key="kcanvas" style={style} > {children}  </div>
    }

    renderTester() {
        let canvas = this.state.showCanvas ? this.renderReadyCanvas() : null
        return  [<iframe title="Tester" ref={ref => this.lel = ref} key="kframe" src="http://pracuj.pl/" width="100%" height="100%"  scrolling="no" frameBorder="0"/>,
                canvas
    ]
    }

    delay() {
        this.setState(prevState => ({
            ms: prevState.ms + 1000
        }));
        if (this.state.ms >= this.props.mainCanvas.canvases[0].delay.slice(0, -2)) {
            this.setState({
                ms: 1000,
                showCanvas: true
            });
            clearInterval(this.interval);
        }

    }


    render() {
        //if(this.lel) {console.log(this.lel.contentWindow.document)}
        
            return ReactDOM.createPortal(this.renderTester(), this.containerEl);
    }

    componentDidMount() {
        const str = `@-webkit-keyframes bounce{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05);}to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}}@keyframes bounce{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05);}to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1);}}`;
        this.testerStyle.innerText += str;
        this.containerEl.style.cssText = "width:100%;min-height:2000px;max-height:6000px;margin:0;";
        this.externalWindow = window.open('', '', 'width:1300;height:600;left=0,top=0;margin:0;padding:0');
        this.externalWindow.document.body.appendChild(this.containerEl);
        if(this.lel)console.log(this.externalWindow.document.body.childNodes[0].childNodes[0].contentWindow.document.body);
        this.externalWindow.document.body.style.cssText = "margin:0;padding:0;";

       
       this.externalWindow.document.head.appendChild(this.testerStyle);
       
        this.externalWindow.addEventListener('beforeunload', () => {
            this.props.closeWindowTester();
          });
        this.interval = setInterval(() => this.delay(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
        this.externalWindow.close();
    }
}

const mapStateToProps = ({ mainCanvas, elements }) => {
    return { mainCanvas, elements };
}

export default connect(mapStateToProps, actions)(Tester);