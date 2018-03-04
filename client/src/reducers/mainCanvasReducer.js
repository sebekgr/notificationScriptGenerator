
import {arrayMove} from 'react-sortable-hoc';

const initialState = {
    
    animationList: ["bounce", "flip", "fadeInDown", "fadeInLeft", "fadeInRight", "zoomIn", "rubberBand"],
    canvases: [
        {
            id: 4563,
            name: "Main canvas",
            transitionToNext: 1000,
            delay: 5000,
            style: {
                animationDuration: "1000ms",
                backgroundColor: "white",
                animationName: "bounce",
                border: "none",
                width: "500px",
                height: "500px",
                padding: "20px",
                borderRadius: "5px"
            },
            children: []
        }
    ],
    selectedCanvas:{}
    
}

export default (state = initialState, action) => {
    const {property, id, value, type, name, style, transitionToNext, delay, elementsOrder, oldIndex, newIndex} = action;
    switch (type) {

        case 'ON_SORT_END':
            const sortChildren = arrayMove(elementsOrder, oldIndex, newIndex);
            const sortInCanvas = state.canvases.map(canvas => {
                if(canvas.id === state.selectedCanvas.id) {
                    return {...canvas, children: sortChildren}
                } else {return canvas}
            })

            return Object.assign({}, state, {canvases:sortInCanvas, selectedCanvas: {...state.selectedCanvas, children: sortChildren}});

        case 'INIT_CANVAS':
        return Object.assign({}, state, {selectedCanvas: state.canvases[0]});

        case 'ADD_CANVAS': 

            const newCanvas = {id: Date.now(), name,transitionToNext, delay, style, children: []};
            return {...state, 
                canvases: [...state.canvases, newCanvas, ...state],
                selectedCanvas: newCanvas
                
            }

        case 'ADD_ELEMENT':
            let children = [];
            const currentCanvas = state.selectedCanvas.id;
            const canvases = state.canvases.map( canvas => {
                if(canvas.id === currentCanvas) {
                   children = [...canvas.children, id];
                   return {...canvas, children}
                } else {
                    return canvas
                }
             });
             
        return Object.assign({}, state, {canvases, selectedCanvas: {...state.selectedCanvas, children: [...state.selectedCanvas.children, id]}})
    

        case 'UPDATE_CANVAS':
           let newStyle = { ...state.style, [property]: value };
           return {...state, newStyle}

        case 'SELECT_CANVAS':
            const chosenCanvas = state.canvases.find( canvas => canvas.id === id);
            return {...state, selectedCanvas: chosenCanvas}

        default: 
        return state;
    }
}

