import React from 'react';
import { itemsFetchData } from '../actions/items';

class ItemList extends React.Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData('https://5826ed963900d612000138bd.mockapi.io/items');
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }
    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }
    return (
      <ul>
        {this.props.items.map((item, itr) => (
          <li key={itr}>
            {item.label}
          </li>
        ))}
      </ul>
    );
  }
}

export default ItemList;
