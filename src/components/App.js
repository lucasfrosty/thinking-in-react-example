import React, { Fragment, Component } from 'react';
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';

import prodArray from '../utils/products';

class App extends Component {
  state = {
    showOnlyProductsInStock: false,
  };

  toggleShowProductsInStock = () => {
    this.setState(prevState => ({
      showOnlyProductsInStock: !prevState.showOnlyProductsInStock,
    }));
  };

  render() {
    const { showOnlyProductsInStock } = this.state;
    return (
      <Fragment>
        <SearchBar
          showOnlyProductsInStock={showOnlyProductsInStock}
          toggleShowProductsInStock={this.toggleShowProductsInStock}
        />
        <ProductsTable showOnlyProductsInStock={showOnlyProductsInStock} />
      </Fragment>
    );
  }
}
export default App;
