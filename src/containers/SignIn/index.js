import React from "react"
import { Redirect } from "react-router-dom"
import { inject, observer } from "mobx-react"

import withAuth from "@/containers/Wrappers/withAuth"
import SignInComponent from "@/components/SignIn"

@inject("store")
@observer
class SignInContainer extends React.Component {
  state = {
    username: "",
    password: ""
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    this.props.authStore.signIn({
      username: this.state.username,
      password: this.state.password
    })
  }

  render() {
    if (this.props.authenticated && !this.props.authenticating) {
      return <Redirect to="/" />
    } else {
      return (
        <SignInComponent
          username={this.state.username}
          password={this.state.password}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      )
    }
  }
}

export default withAuth(SignInContainer)
