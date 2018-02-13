import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
	applyMiddleware(reduxThunk),

  );

  const store = createStore(reducers, enhancer);





ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.querySelector("#root"));