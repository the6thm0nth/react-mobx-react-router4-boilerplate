import React, { Component } from "react"
import { inject, observer } from "mobx-react"

export default function withAuth(WrappedComponent) {
  @inject("store")
  @observer
  class WithAuthContainer extends Component {
    render() {
      return (
        <WrappedComponent
          authStore={this.props.store.auth}
          authenticated={this.props.store.auth.authenticated}
          authenticating={this.props.store.auth.authenticating}
        />
      )
    }
  }

  return WithAuthContainer
}
