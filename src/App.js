import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ProductDisplay } from './ProductDisplay';
import { Selector } from './Selector';
import dataStore from './store';
import { SupplierDisplay } from './SupplierDisplay';
import { StoreAccess } from "./store/StoreAccess";

export default class App extends Component {

  render() {
    return <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <StoreAccess store={dataStore} />
        </div>
        <div className="col">
          <Provider store={dataStore}>
            <Selector>
              <ProductDisplay name="Products" />
              <SupplierDisplay name="Suppliers" />
            </Selector>
          </Provider>
        </div>
      </div>
    </div>
  }
}