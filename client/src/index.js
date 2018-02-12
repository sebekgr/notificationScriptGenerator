import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import recuders from './reducers';
import reduxThunk from 'redux-thunk';

const store = createStore(recuders,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(reduxThunk));
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.querySelector("#root"));