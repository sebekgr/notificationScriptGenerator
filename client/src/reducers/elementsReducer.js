

let initialState = {
    elements: [

    ],
    selectedElement: {},
    floatRadio: ["none", "left", "right"],
    alignRadio: ["left", "center", "right"],
    fonts: ["Lato", "Karma", "Open Sans Condensed", "Josefin Sans"],

};

export default (state = initialState, action) => {

    const { id, elemType, content, style, type, property, value, much, } = action;
    switch (type) {


        case 'ADD_ELEMENT':
            return {
                ...state,
                elements: [...state.elements,
                {
                    id,
                    elemType,
                    content,
                    style,
                }, ...state
                ]
            }

        case 'DELETE_ELEMENT':
            const notDeletedElements = state.elements.filter(element => element.id !== id);
            if (id === state.selectedElement.id) {
                return Object.assign({}, state, { elements: notDeletedElements, selectedElement: {} });
            }
            return Object.assign({}, state, { elements: notDeletedElements });

        case 'RESET_SELECTED':
        case 'ADD_CANVAS':
            return { ...state, selectedElement: {} }

        case 'SELECT_ELEMENT':
            const chosenElement = state.elements.find(element => element.id === id);
            if (chosenElement.id !== state.selectedElement.id) {
                return Object.assign({}, state, { selectedElement: chosenElement });
            }
            return Object.assign({}, state, { selectedElement: {} });


        case 'UPDATE_ELEMENT_CONTENT':
            const elements = state.elements.map(el => {
                if (el.id === id) {
                    return { ...el, content };
                } else {
                    return el;
                }
            });
            console.log('update element content');
            return Object.assign({}, state, { elements, selectedElement: { ...state.selectedElement, content } });

        case 'UPDATE_ELEMENT': {
            let style = {}
            const elements = state.elements.map(el => {
                if (el.id === id) {
                    style = { ...el.style, [property]: value };
                    return { ...el, style };
                } else {
                    return el;
                }
            });

            return Object.assign({}, state, { elements, selectedElement: { ...state.selectedElement, style } });

        }

        case 'UPDATE_FORM':
            let styl = null;
            let newStyle = {}
            if (much === 2) {
                styl = "formStyle";
            } else if (much === 3) {
                styl = "submitStyle";
            } else if (much === 4) {
                styl = "inputStyle";
            }
            let elemy = state.elements.map(el => {
                if (el.id === id) {
                    newStyle = { ...el.style, [styl]: { ...el.style[styl], [property]: value } };
                    console.log(newStyle);
                    return { ...el, style: newStyle }
                }
                else return el;
            })

            return Object.assign({}, state, { elements: elemy, selectedElement: { ...state.selectedElement, style: newStyle } });

        case 'UPDATE_FORM_CONTENT':
            let context = null;
            if (much === 2) {
                context = "action";
            } else if (much === 3) {
                context = "input";
            } else if (much === 4) {
                context = "submit";
            }
            let newContent = {}
            let elemys = state.elements.map(el => {
                if (el.id === id) {
                    newContent = { ...el.content, [context]: content };
                    console.log(newContent);
                    return { ...el, content: newContent }
                }
                else return el;
            })
            return Object.assign({}, state, { elements: elemys, selectedElement: { ...state.selectedElement, content: newContent } });

        default:
            return state;
    }
}