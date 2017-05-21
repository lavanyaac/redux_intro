import React from 'react';
import { Provider } from 'react-redux';
import ItemListContainer from './ItemListContainer.jsx';
// import { ConnectedComponent as ItemListContainer } from './ItemListContainer.jsx';
import PropTypes from 'prop-types';

const Root = (props) => (
  <Provider store={props.store}>
    <ItemListContainer />
  </Provider>
);

export default Root;

/*
Other containers that are part of your App would be wrapped inside the
Provider. Alternatively, you could create an App component that would
that wrap all your app container components.

The Provider in conjunction with the connect function (see components/ItemListContainer)
are what make state globally available to all components. The Provider
is simply a React component in which we wrap the rest of the application.
It receives the store as a prop. The Provider then sets a store context
(i.e. an invisible prop), which is passed down to all of its children.
The Provider should wrap all the app's components so that all app components
will receive the store context.

Components that need to access the store context will have to connect(),
which converts the store context into a store prop.
*/
