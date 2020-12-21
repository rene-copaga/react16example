import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ProductsAndSuppliers from './ProductsAndSuppliers';
import dataStore from './store';

export default class App extends Component {

  render() {
    return (
      <Provider store={ dataStore }>
        <ProductsAndSuppliers />
      </Provider>
    )
  }
}