
const initialState = {
    elements: [],
    selectedElement: {}
};

export default function (state = initialState, action) {
    const {id, elemType, content, style, type, selected} = action;
    switch (type) {
        
         case 'GET_ELEMENTS': 
             return state.elements;

        case 'ADD_ELEMENT':
            return Object.assign({}, state, {
                elements: [...state.elements,
                    {
                        id: Date.now(),
                        elemType,
                        content,
                        style,
                        selected: false
                    }, ...state
                ]
            })

        case 'DELETE_ELEMENT':
        const notDeletedElement = state.elements.filter(element => element.id !== id);
        return Object.assign({}, state, {elements: notDeletedElement});
        
        default: 
        return state;
    }
}