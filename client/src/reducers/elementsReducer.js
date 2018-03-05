

let initialState = {
    elements: [

    ],
    selectedElement: {},
    floatRadio: ["none", "left", "right"],
    alignRadio: ["left", "center", "right"],
    fonts: ["Lato", "Karma", "Open Sans Condensed", "Josefin Sans"],

};

export default  (state = initialState, action) => {
   
    const {id, elemType, content, style, type, property, value, childrenList} = action;
    switch (type) {

      
        case 'ADD_ELEMENT':
            return {...state, 
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
            if(id === state.selectedElement.id) {
                return Object.assign({}, state, {elements: notDeletedElements, selectedElement:{}});
            }
            return Object.assign({}, state, {elements: notDeletedElements});

        case 'RESET_SELECTED':
        return {...state, selectedElement: {}}
        
        case 'SELECT_ELEMENT':
            const chosenElement = state.elements.find(element => element.id === id);
            if(chosenElement.id !== state.selectedElement.id) {
                return Object.assign({}, state, {selectedElement: chosenElement});
            } 
            return Object.assign({}, state, {selectedElement: {}});
    

        case 'UPDATE_ELEMENT_CONTENT':
            const elements = state.elements.map(el => {
                if (el.id === id) {
                    return { ...el, content};
                } else {
                    return el;
                }
            });
            return Object.assign({}, state, {elements, selectedElement: {...state.selectedElement, content}});       

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


            return Object.assign({}, state, {elements, selectedElement: {...state.selectedElement, style}});

        }


        default: 
        return state;
    }
}