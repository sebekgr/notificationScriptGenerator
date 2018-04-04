
export default function (state = null, action) {

    switch (action.type) {
        
        case 'FETCH_USER': 
        console.log(action.res);
            return action.res || false;
        case 'LOGOUT_USER': 
            return  null;
        case 'DELETE_USER': 
            return  null;
        default:  
        return state;
    }
}