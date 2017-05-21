import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import Root from './components/Root.jsx';

const store = configureStore();

/*
Simply put, the store dispatches actions (i.e., objects) to its reducer,
which changes the store state based on the type of action received and
the other (payload) keys in the action object. The reducer is like a factory
that makes shiny new objects for the store using old stuff from the store
and new stuff brought in from from the dispatcher.
*/

/* Uncomment to run commands below in console
import { itemsHasErrored,
         itemsIsLoading,
         itemsFetchDataSuccess } from './actions/items';

window.store = store;
window.itemsHasErrored = itemsHasErrored;
window.itemsIsLoading = itemsIsLoading;
window.itemsFetchDataSuccess = itemsFetchDataSuccess;
*/

/*
store.getState();
store.dispatch(itemsHasErrored(true));
store.getState();
store.dispatch(itemsIsLoading(true));
let items = [
  {
      id: 1,
      label: 'List item 1'
  },
  {
      id: 2,
      label: 'List item 2'
  }
];
store.dispatch(itemsFetchDataSuccess(items));
store.getState();
store.itemsHasErrored(false);
*/

ReactDOM.render(<Root store={store} />, document.getElementById('app'));
