import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import Products from "./components/Products";

class Routes extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            {<Redirect to="/products" />}
          </Route>
          <Route path="/products" component={Products} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null, null)(Routes));
