import React from "react"
import { Provider } from "react-redux";
import store from "../redux/configureStore.js";
import PropTypes from "prop-types"

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Greeting from './Greeting.js'

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hello Daniel</h1>} />
          <Route path="/greetings" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App
