export const addElement = (elemType, style, content,id) => {
    return {
        type: 'ADD_ELEMENT',
        elemType,
        style,
        content,
        id: Date.now()
    }
}

export const deleteElement = id => {
    return {
        type: 'DELETE_ELEMENT',
        id
    }
}
export const selectElement = id => {
    return {
        type: 'SELECT_ELEMENT',
        id
    }
}

export const updateElement = (id, value, property) => {
    return {
        type: 'UPDATE_ELEMENT',
        id,
        value,
        property
    }
}

export const updateElementContent = (id, content) => {
    return {
        type: 'UPDATE_ELEMENT_CONTENT',
        id,
        content
    }
}