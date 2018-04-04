import axios from 'axios';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/auth/current_user');
    dispatch({type: 'FETCH_USER', res: res.data});
};

export const logoutUser = () => async dispatch => {
    await axios.get('/auth/logout');
    dispatch({type: 'LOGOUT_USER'});
};
export const deleteUser = id => async dispatch => {
    await axios.delete(`/auth/delete/${id}`);
    dispatch({type: 'DELETE_USER'});
};

