import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  const composeEnhancer =
    window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose; // add support to redux devtools

  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(reduxImmutableStateInvariant()))
  );
}
