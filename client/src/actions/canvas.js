export const updateCanvas = (id, value, property) => {
    return {
        type: 'UPDATE_CANVAS',
        id,
        value,
        property
    }
}

export const addCanvas = (name, transitionToNext, delay, style) => {
    return {
        type: 'ADD_CANVAS',
        name,
        transitionToNext,
        delay,
        style
    }
}

export const selectCanvas = id =>{
    return {
        type: 'SELECT_CANVAS',
        id
    }
}

export const initCanvas = () => {
    return {
        type: 'INIT_CANVAS'
    }
}

export const onSortEnd = (elementsOrder, oldIndex, newIndex) => {
    return {
        type: 'ON_SORT_END',
        elementsOrder,
        oldIndex,
        newIndex
    }
}

export const updateCanvasContent = (id, value, property) => {
    return {
        type: 'UPDATE_CANVAS_CONTENT',
        id,
        value,
        property



    }
}
