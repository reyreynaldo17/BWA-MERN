import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { createBrowserHistory } from "history";

import "assets/bootstrap/scss/style.scss";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import Example from "pages/Example";

const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

function App() {
  return (
    <div className="App">
      <Router history={history} basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/properties/:id" component={DetailsPage} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/example" component={Example} />
        </Switch>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
