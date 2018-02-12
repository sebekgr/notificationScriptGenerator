import axios from 'axios';
import {FETCH_USER, LOGOUT_USER} from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/current_user');
    dispatch({type: FETCH_USER, res: res.data});
};



export const logoutUser = () => async dispatch => {
    const res = axios.get('/auth/logout');
    dispatch({type: LOGOUT_USER});
};
