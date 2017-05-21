import { connect } from 'react-redux';
import ItemList from './ItemList.jsx';

import { itemsFetchData } from '../actions/items';

// Maps the state passed from the store to the props passed to the ItemList
// component. So items, hasErrored and isLoading are props passed to ItemList.
const mapStateToProps = (state) => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

/*
Maps the store's action creators to the props passed to ItemList. Handler
functions would also be mapped here.
*/
const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);

/*
An alternate way of doing the export above. Does the same thing but I think
it's easier to understand what connect does. Uncomment import { ConnectedComponent
 as ItemListContainer } from './todo_list/todo_list_container.jsx';
in components/Root to see make it work
*/
// const createConnectedComponent = connect(mapStateToProps, mapDispatchToProps);
// export const ConnectedComponent = createConnectedComponent(ItemList);
