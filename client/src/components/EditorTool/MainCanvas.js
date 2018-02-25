import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import ComponentElement from './Assets/ComponentElement';

class MainCanvas extends Component {

    deleteElement(id, e){
        this.props.deleteElement(id);
        e.stopPropagation();
    }

    selectElement(id, e) {
        this.props.selectElement(id);
        e.stopPropagation();
    }

    onHover(e, refBtnKey){
        let y = Math.trunc(e.target.offsetTop) - 15;
        let x = Math.trunc(e.target.offsetLeft) -15; 
        this[refBtnKey].style.cssText = `top: ${y}px; left: ${x}px;`;
    }

    render(){
        
        const animation = this.props.mainCanvas.animation;
        const isActive = this.props.elements.selectedElement.id;
         const elements = this.props.elements.elements.map( element => {
            const refBtnName = element.id + "btn";
              return [

                <ComponentElement onHover={(e) => this.onHover(e, refBtnName)} active={isActive === element.id} onSelect={(e)=>this.selectElement(element.id, e)} key={element.id} {...element}/>,
                <button key={element.id*2}
                    ref={ref => this[refBtnName] = ref}
                    onClick={(e) => this.deleteElement(element.id, e)}
                    className="deleteComponentBtn"
                    >X
                </button>
             ]
             
         })

        return(
            <div className={`mainCanvas ${animation}`} style={this.props.mainCanvas.style} >
                {elements}
            </div>
        );
       
    }

}



const mapStateToProps = ({mainCanvas, elements}) => {
    return {mainCanvas, elements};
}

export default connect(mapStateToProps, actions)(MainCanvas);