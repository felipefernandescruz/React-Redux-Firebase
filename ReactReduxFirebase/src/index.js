import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import { firebaseConnect } from "./providers/firebaseProvider/firebaseProvider";
import ReduxThunk from "redux-thunk";

import Routes from "./routes";
import reducers from "./reducers";

class App extends Component {
  componentWillMount() {
    firebaseConnect();
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
