import React, { Component } from "react"
import { inject, observer } from "mobx-react"

import withAuth from "@/containers/Wrappers/withAuth"
import ActiveLink from "@/components/Common/ActiveLink"

@inject("store")
@observer
class TopNav extends Component {
  render() {
    const { authenticated } = this.props

    return (
      <nav>
        <ActiveLink activeOnlyWhenExact={true} to="/">
          Home
        </ActiveLink>
        {authenticated && <ActiveLink to="/posts">Posts</ActiveLink>}
      </nav>
    )
  }
}

export default withAuth(TopNav)
