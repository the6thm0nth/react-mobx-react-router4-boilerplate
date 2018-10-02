import React, { Component } from "react"
import { Route } from "react-router-dom"
import LazyRoute from "lazy-route"
import DevTools from "mobx-react-devtools"

import TopBar from "@/containers/Layouts/top-bar"

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        {/* <DevTools /> */}

        <TopBar />

        <Route
          exact
          path="/"
          render={props => (
            <LazyRoute {...props} component={import("@/containers/Home")} />
          )}
        />

        <Route
          exact
          path="/signin"
          render={props => (
            <LazyRoute {...props} component={import("@/containers/SignIn")} />
          )}
        />

        <footer>
          twitter:{" "}
          <a href="https://twitter.com/the6thm0nth" target="_blank">
            @the6thm0nth
          </a>{" "}
          | github:{" "}
          <a href="https://github.com/the6thm0nth" target="_blank">
            the6thm0nth
          </a>{" "}
          | forked{" "}
          <a href="http://boilerplate.mhaagens.me/" target="_blank">
            {"<"}
            React MobX React-Router 4 Boilerplate
            {">"}
          </a>
        </footer>
      </div>
    )
  }
}
