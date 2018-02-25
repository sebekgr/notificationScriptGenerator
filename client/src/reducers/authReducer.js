
export default function (state = null, action) {

    switch (action.type) {
        
        case 'FETCH_USER': 
            return action.res || false;
        case 'LOGOUT_USER': 
            return  null;
        default: 
        return state;
    }
}