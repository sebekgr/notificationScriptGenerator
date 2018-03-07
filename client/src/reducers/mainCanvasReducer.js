
import { arrayMove } from 'react-sortable-hoc';

const initialState = {

    animationList: ["bounce", "flip", "fadeInDown", "fadeInLeft", "fadeInRight", "zoomIn", "rubberBand"],
    canvases: [
        {
            id: 4563,
            name: "Main canvas",
            transitionToNext: "1000ms",
            delay: "5000ms",
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
    selectedCanvas: {}

}

export default (state = initialState, action) => {
    const { property, id, value, type, name, style, transitionToNext, delay, elementsOrder, oldIndex, newIndex } = action;
    switch (type) {

        case 'ON_SORT_END':
            const sortChildren = arrayMove(elementsOrder, oldIndex, newIndex);
            const sortInCanvas = state.canvases.map(canvas => {
                if (canvas.id === state.selectedCanvas.id) {
                    return { ...canvas, children: sortChildren }
                } else { return canvas }
            })

            return Object.assign({}, state, { canvases: sortInCanvas, selectedCanvas: { ...state.selectedCanvas, children: sortChildren } });

        case 'ADD_ELEMENT':
            let children = [];
            const currentCanvas = state.selectedCanvas.id;
            const canvases = state.canvases.map(canvas => {
                if (canvas.id === currentCanvas) {
                    children = [...canvas.children, id];
                    return { ...canvas, children }
                } else {
                    return canvas
                }
            });

            return Object.assign({}, state, { canvases, selectedCanvas: { ...state.selectedCanvas, children: [...state.selectedCanvas.children, id] } })

        case 'DELETE_ELEMENT':

            const notDeleteChildren = state.selectedCanvas.children.filter(child => child !== id);

            const updateCanvas = state.canvases.map(canvas => {
                if (canvas.id === state.selectedCanvas.id) {
                    return { ...canvas, children: notDeleteChildren }
                } else {
                    return canvas
                }
            })

            return {
                ...state,
                canvases: updateCanvas,
                selectedCanvas: {
                    ...state.selectedCanvas,
                    children: notDeleteChildren
                }
            }

        case 'INIT_CANVAS':
            return Object.assign({}, state, { selectedCanvas: state.canvases[0] });

        case 'ADD_CANVAS':

            const newCanvas = { id: Date.now(), name, transitionToNext, delay, style, children: [] };
            return {
                ...state,
                canvases: [...state.canvases, newCanvas, ...state],
                selectedCanvas: newCanvas

            }

        case 'UPDATE_CANVAS': {
            let style = {}
            const canvases = state.canvases.map(el => {
                if (el.id === id) {
                    style = { ...el.style, [property]: value };
                     return { ...el, style };
                } else {
                     return el;
                }
            });
            return Object.assign({}, state, {canvases, selectedCanvas: {...state.selectedCanvas, style}});

        }

        case 'UPDATE_CANVAS_CONTENT': {
            let updateCanvas = {};
            const updateCanvases = state.canvases.map(el => {
                if (el.id === id) {
                    return updateCanvas = { ...el, [property]: value };

                } else {
                    return el;
                }
            });
            return Object.assign({}, state, {canvases: updateCanvases, selectedCanvas: updateCanvas})
        }

        case 'SELECT_CANVAS':
            const chosenCanvas = state.canvases.find(canvas => canvas.id === id);
            return { ...state, selectedCanvas: chosenCanvas }

        default:
            return state;
    }
}

