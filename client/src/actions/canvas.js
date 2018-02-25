export const updateCanvas = (value, property) => {
    return {
        type: 'UPDATE_CANVAS',
        value,
        property
    }
}

export const toggleCanvasEdit = () => {
    return {
        type: 'TOGGLE_CANVAS_EDIT',
    }
}

export const changeAnimation = name =>{
    return {
        type: 'CHANGE_ANIMATION',
        name
    }
}