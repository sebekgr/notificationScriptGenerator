
let initialState = {
    elements: [],
    selectedElement: {},

};

export default function (state = initialState, action) {
    const {id, elemType, content, style, type, property, value} = action;
    switch (type) {
        
        case 'ADD_ELEMENT':
            return Object.assign({}, state, {
                elements: [...state.elements,
                    {
                        id: Date.now(),
                        elemType,
                        content,
                        style,
                    }, ...state
                ]
            })

        case 'RESET_SELECTED':
            
            return {...state, selectedElement: {}}

        case 'DELETE_ELEMENT':
            const notDeletedElements = state.elements.filter(element => element.id !== id);
            if(id === state.selectedElement.id) {
                return Object.assign({}, state, {elements: notDeletedElements, selectedElement:{}});
            }
            return Object.assign({}, state, {elements: notDeletedElements});
        
        case 'SELECT_ELEMENT':
            const selectedElement = state.elements.find(element => element.id === id);
            return Object.assign({}, state, {selectedElement});

        case 'UPDATE_ELEMENT_CONTENT':
        const elements = state.elements.map(el => {
            if (el.id === id) {
                console.log(...el);
                return { ...el, content};
            } else {
                return el;
            }
        });
        return { ...state, elements };       

        case 'UPDATE_ELEMENT': {
            let style = null;
            const elements = state.elements.map(el => {
                if (el.id === id) {
                    style = { ...el.style, [property]: value };
                    
                    return { ...el, style};
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