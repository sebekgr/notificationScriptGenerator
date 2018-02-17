
const initialState = {
    position: "absolute",
    top: `50%`,
    left: `50%`,
    background: "#fff",
    border: "none",
}

export default function (state = initialState, action) {
    switch (action.type) {

        case 'GET_CANVAS': 
            return state;
        

        default: 
        return state;
    }
}

