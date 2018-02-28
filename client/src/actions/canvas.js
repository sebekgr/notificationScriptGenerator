export const updateCanvas = (value, property) => {
    return {
        type: 'UPDATE_CANVAS',
        value,
        property
    }
}

export const testCanvas = () => {
    return {
        type: 'TEST',
    }
}