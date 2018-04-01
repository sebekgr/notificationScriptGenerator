const initialState = {
    visible: false,
    status: 'info',
    generatedUrl: null
}

export default (state = initialState, action) => {
    const { type, visible, res } = action;
    switch(type) {
        case 'GENERATE_SCRIPT':
        return Object.assign({}, state, {status: res.data.status, generatedUrl: res.data.url});

        case 'VISIBLE':
        return Object.assign({}, state, {visible});
        default:
            return state;

        case 'CLOSE':
        return initialState;
    }
}