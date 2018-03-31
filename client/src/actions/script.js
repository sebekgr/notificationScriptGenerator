import axios from 'axios';
export const generateScript = (canvasesReady, url, overlay, user, animation) => async dispatch => {
    const res = await axios.post('/script/generate', {
        canvasesReady,
        url,
        overlay,
        user,
        animation
    });
    dispatch({type: 'GENERATE_SCRIPT', res});
};

export const showScriptPopUp = visible => {
    return {
        type: 'VISIBLE',
        visible
    }
}
