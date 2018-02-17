import { combineReducers} from 'redux';
import authReducer from './authReducer';
import mainCanvasReducer from './mainCanvasReducer';
import elementsReducer from './elementsReducer';
import { routerReducer } from 'react-router-redux'

export default combineReducers({
    routing: routerReducer,
    mainCanvas: mainCanvasReducer,
    elements: elementsReducer,
    auth: authReducer
});