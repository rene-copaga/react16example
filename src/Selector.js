import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { ProductDisplay } from "./ProductDisplay";
import { SupplierDisplay } from "./SupplierDisplay";

export class Selector extends Component {

    renderMessage = (msg) => <h5 className="bg-info text-white m-2 p-2">{msg}</h5>

    render() {
        return <Router>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2">
                        <div><Link to="/data/one">Link #1</Link></div>
                        <div><Link to="/data/two">Link #2</Link></div>
                        <div><Link to="/people/bob">Bob</Link></div>
                    </div>
                    <div className="col">
                        <Route path="/data"
                            render={() => this.renderMessage("Route #1")} />
                        <Route path="/data/two"
                            render={() => this.renderMessage("Route #2")} />
                    </div>
                </div>
            </div>
        </Router>
    }
}