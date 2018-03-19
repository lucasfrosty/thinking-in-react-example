import React, { Fragment, Component } from 'react';
import SearchBar from './SearchBar';
import ProductsTable from './ProductsTable';

class App extends Component {
  state = {
    showOnlyProductsInStock: false,
    inputValue: '',
  };

  toggleShowProductsInStock = () => {
    this.setState(prevState => ({
      showOnlyProductsInStock: !prevState.showOnlyProductsInStock,
    }));
  };

  changeInputValue = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    const { showOnlyProductsInStock, inputValue } = this.state;
    return (
      <Fragment>
        <SearchBar
          showOnlyProductsInStock={showOnlyProductsInStock}
          changeInputValue={this.changeInputValue}
          toggleShowProductsInStock={this.toggleShowProductsInStock}
        />
        <ProductsTable
          inputValue={inputValue}
          showOnlyProductsInStock={showOnlyProductsInStock}
        />
      </Fragment>
    );
  }
}
export default App;
