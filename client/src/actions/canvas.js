export const updateCanvas = (value, property) => {
    return {
        type: 'UPDATE_CANVAS',
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

export const getChildren = childrenList => {
    return {
        type: 'GET_CHILDREN',
        childrenList
    }
}