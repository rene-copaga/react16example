import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect }
    from "react-router-dom";
import { ProductDisplay } from "./ProductDisplay";
import { SupplierDisplay } from "./SupplierDisplay";
import { RouteInfo } from "./routing/RouteInfo";
import { ToggleLink } from "./routing/ToggleLink";

export class Selector extends Component {

    renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{msg}</h5>

    render() {
        return <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <ToggleLink to="/products">Products</ToggleLink>
                        <ToggleLink to="/suppliers">Suppliers</ToggleLink>
                        <ToggleLink to="/info/match">Match</ToggleLink>
                        <ToggleLink to="/info/location">Location</ToggleLink>
                        <ToggleLink to="/info" exact={ true }>All Info</ToggleLink>
                    </div>
                    <div className="col">
                        <Switch>
                            <Route path="/products" component={ProductDisplay} />
                            <Route path="/suppliers" component={SupplierDisplay} />
                            <Route path="/info/:datatype?" component={ RouteInfo } />
                            <Redirect to="/products" />
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    }
}