import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/Auth';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
          auth: AuthReducer
        }),
        composeEnhancer(applyMiddleware(thunk))
    );
    return store;
}
