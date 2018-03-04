import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import ComponentElement from './Assets/ComponentElement';

import {SortableContainer} from 'react-sortable-hoc';

class MainCanvas extends Component {


    deleteElement(id, e) {
        this.props.deleteElement(id);
        e.stopPropagation();
    }
    
    selectElement(id, e) {
        this.props.selectElement(id);
        e.stopPropagation();
    }
    
    onHover(e, refBtnKey) {
        let y = Math.trunc(e.target.offsetTop) - 15;
        let x = Math.trunc(e.target.offsetLeft) -15; 
        this[refBtnKey].style.cssText = `top: ${y}px; left: ${x}px;`;
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        const children = this.props.mainCanvas.selectedCanvas.children;
        this.props.onSortEnd(children, oldIndex, newIndex);
    };


    findChildren(){
        const arr = this.props.mainCanvas.selectedCanvas.children;
        let elementsEachCanvas = [];
        if(arr) {
            for(let i = 0; i <arr.length; i++){
                elementsEachCanvas.push(this.props.elements.elements.find(element => element.id === arr[i]));
            }
        } else{
            false;
        }
        return elementsEachCanvas;
    }

    render(){
      
        const isActive = this.props.elements.selectedElement.id;
        const SortableList = SortableContainer(({elements, handleDelete, handleSelect, handleHover}) => {
            return (
              <ul className="sortableList">
                {elements.map((element, index) => {
                    const refBtnName = element.id + "btn";
               return [
                    <ComponentElement
                        
                        key={element.id}
                        index={index}
                        {...element}
                        onHover={(e) => this.onHover(e, refBtnName)}
                        active={isActive === element.id}
                        onSelect={(e)=>this.selectElement(element.id, e)}
                    />,
                    <button
                        key={element.id*2}
                        onClick={(e)=>this.deleteElement(element.id, e)}
                        className="deleteComponentBtn"
                        ref={ref => this[refBtnName] = ref}
                    >X
                    </button>
                ]})}
              </ul>
            );
          });

         

        return(
            <div className="mainCanvas" style={this.props.mainCanvas.selectedCanvas.style} >
                
                <SortableList
                    elements={this.findChildren()}
                    onSortEnd={this.onSortEnd}
                    pressDelay={300}
                />
            </div>
        );
       
    }

}



const mapStateToProps = ({mainCanvas, elements}) => {
    return {mainCanvas, elements};
}

export default connect(mapStateToProps, actions)(MainCanvas);