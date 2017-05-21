import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const defaultState = {
  items: [],
  itemsHasErrored: false,
  itemsIsLoading: false
};

const configureStore = (initialState = defaultState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
};

export default configureStore;

/*
createstore(reducer, [preloadedState], [enhancer]) {
  reducer - A pure function that receives the app's current state
  and incoming actions, determines how to update the store's state,
  and returns the new next state

  preLoadedState (optional) - An object representing any application
  state that existed before the store was created

  enhancer (optional) - A function that adds extra functionality to the
  store - usually where you apply middleware, which behaves similarily to
  Express middleware
}
*/
