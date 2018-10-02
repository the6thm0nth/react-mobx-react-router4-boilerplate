import React, { Component } from "react"
import { inject, observer } from "mobx-react"
import { Link, withRouter } from "react-router-dom"

import TopBarComponent from "@/components/Layouts/top-bar"

@withRouter
@inject("store")
@observer
export default class TopBarContainer extends Component {
  logOut = () => {
    this.props.store.auth.logOut()
  }

  render() {
    return (
      <TopBarComponent
        location={this.props.location}
        authenticated={this.props.store.auth.authenticated}
        // Props

        logOut={this.logOut}
        // Actions
      />
    )
  }
}
