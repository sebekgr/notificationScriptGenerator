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

export const updateElementContent = (id, content, much) => {
    return {
        type: 'UPDATE_ELEMENT_CONTENT',
        id,
        content,
        much
    }
}

export const updateForm = (id, value, property, much) => {
    return {
        type: 'UPDATE_FORM',
        id,
        value,
        property,
        much
    }
}
export const updateFormContent = (id, content, much) => {
    return {
        type: 'UPDATE_FORM_CONTENT',
        id,
        content,
        much
    }
}


export const setHydrateElements = data => {
    return{
        type: 'SET_HYDRATE_ELEMENTS',
        data
    }
}