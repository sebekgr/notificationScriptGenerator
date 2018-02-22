
const initialState = {
    background: "#fff",
    border: "none",
    padding: "20px",
}

export default function (state = initialState, action) {
    switch (action.type) {

        case 'GET_CANVAS': 
            return state;
        

        default: 
        return state;
    }
}

