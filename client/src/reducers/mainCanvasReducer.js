
const initialState = {
    delay: 5,
    animationList: ["bounce", "flip", "fadeInDown", "fadeInLeft", "fadeInRight", "zoomIn", "rubberBand"],
    style: {
        animationDuration: "1000ms",
        backgroundColor: "#fff",
        animationName: "bounce",
        border: "none",
        width: "500px",
        height: "500px",
        padding: "20px",
        borderRadius: "5px"
    }
}

export default (state = initialState, action) => {
    const {property, value, type} = action;
    switch (type) {
        case 'UPDATE_CANVAS':
            console.log("update canvas", property, value);
           const style = { ...state.style, [property]: value };
           return {...state, style}

        case 'TEST':
        console.log("test", state);
        return state;

        default: 
        return state;
    }
}

