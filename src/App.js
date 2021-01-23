import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import Main from "./components/main";
import { boyGroups, bGroup, girlGroups, gGroup, Footer, Misc, Navbar, News, Quiz, Default } from './pages'

import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/news" component={News}></Route>
            <Route path="/quiz" component={Quiz}></Route>
            <Route exact path="/girl-group" component={girlGroups}></Route>
            <Route path="/girl-group/:gGroup" component={gGroup}></Route>
            <Route exact path="/boy-group" component={boyGroups}></Route>
            <Route path="/boy-group/:bGroup" component={bGroup}></Route>
            <Route default component={Default} ></Route>
          </Switch>
          <Misc />
          <Footer />
        </Provider>
      </Router>
    );
  }
}

export default App;
