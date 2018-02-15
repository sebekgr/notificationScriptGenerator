import { combineReducers} from 'redux';
import authReducer from './authReducer';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    routing: routerReducer,
    auth: authReducer
});