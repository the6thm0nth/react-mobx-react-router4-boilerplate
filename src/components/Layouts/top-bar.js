import React from "react"
import { Link } from "react-router-dom"

import TopNav from "@/components/TopNav"
import Button from "@/components/Common/Button"

export default ({ location = "/", authenticated = false, logOut }) => {
  return (
    <div className="topbar">
      <TopNav location={location} />

      {authenticated ? (
        <Button onClick={logOut} title="Log out" />
      ) : (
        <Link to="/signin">Sign In</Link>
      )}
    </div>
  )
}
