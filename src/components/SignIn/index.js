import React from "react"

export default ({
  username = "",
  password = "",
  handleChange,
  handleSubmit
}) => {
  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          value={username}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">로그인</button>
      </form>
    </section>
  )
}
