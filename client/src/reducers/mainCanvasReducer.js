
const initialState = {
    delay: 5,
    animation: "flip",
    style: {
        animationDuration: "1s",
        backgroundColor: "#fff",
        border: "none",
        width: "500px",
        height: "500px",
        padding: "20px",
        borderRadius: "5px"
    }
}

export default function (state = initialState, action) {
    const {property, value, type, name} = action;
    switch (type) {

        case 'CHANGE_ANIMATION':
            const animation = name;
            return {...state, animation, ...state.style}
        

        case 'UPDATE_CANVAS':
           const style = { ...state.style, [property]: value };
           return {...state, style}

        default: 
        return state;
    }
}

