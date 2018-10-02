import { observable, action } from "mobx"
import axios from "axios"

export default class Auth {
  @observable
  authenticated
  @observable
  authenticating

  constructor() {
    this.authenticated = false
    this.authenticating = false
  }

  @action
  signIn() {
    return new Promise((resolve, reject) => {
      this.authenticating = true

      setTimeout(() => {
        this.authenticated = true
        this.authenticating = false
        resolve(this.authenticated)
      }, 0)
    })
  }

  @action
  logOut() {
    return new Promise((resolve, reject) => {
      this.authenticating = true

      setTimeout(() => {
        this.authenticated = false
        this.authenticating = false
        resolve(this.authenticated)
      }, 0)
    })
  }
}
