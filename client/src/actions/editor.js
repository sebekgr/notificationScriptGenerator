
export const addElement = (elemType, style, content, selected, id) => {
    return {
        type: 'ADD_ELEMENT',
        elemType,
        style,
        content,
        id,
        selected
    }
}

export const deleteElement = id => {
    return {
        type: 'DELETE_ELEMENT',
        id
    }
}

export const toogleElement = id => {
    return {
        type: 'TOOGLE_ELEMENT',
        id
    }
}

export const getCanvas = () => {
    return { 
        type: 'GET_CANVAS'
    }
}

export const getElements = () => {
    return {
        type: 'GET_ELEMENTS'
    }
}