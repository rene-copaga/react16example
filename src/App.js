import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Selector } from './Selector';
import dataStore from './store';
import { PRODUCTS, SUPPLIERS } from "./store/dataTypes";

export default class App extends Component {

  render() {
    return <Provider store={dataStore}>
      <Selector>
        <data name="Products" datatype={PRODUCTS} />
        <data name="Suppliers" datatype={SUPPLIERS} />
      </Selector>
    </Provider>
  }
}