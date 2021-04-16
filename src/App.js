import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ProductDisplay } from './ProductDisplay';
import { Selector } from './Selector';
import dataStore from './store';
import { SupplierDisplay } from './SupplierDisplay';
import { StoreAccess } from "./store/StoreAccess";
import { CustomConnector, CustomConnectorProvider } from "./store/CustomConnector";
import { startEditingProduct } from "./store/stateActions";
import { ProductTable } from "./ProductTable";
import { deleteProduct } from "./store/modelActionCreators";

const selectors = {
  products: (store) => store.modelData.products
}

const dispatchers = {
  editCallback: startEditingProduct,
  deleteCallback: deleteProduct
}
export default class App extends Component {

  render() {
    return <Provider store={dataStore}>
      <Selector>
        <ProductDisplay name="Products" />
        <SupplierDisplay name="Suppliers" />
      </Selector>
    </Provider>
  }
}