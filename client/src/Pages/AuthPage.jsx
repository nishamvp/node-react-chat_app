import React from 'react'
import axios from 'axios'

const AuthPage = (props) => {
  const onSubmit = async (e) => {
    e.preventDefault()
    const { value } = e.target[0]
    try {
      const response = await axios.post('http://localhost:3001/authenticate', {
        username: value,
      })
      const data = await response.data
      props.onAuth({ ...data, secret: value })
    } catch (error) {
        console.log("Auth error",error)
    }
  }
  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">Set a username to get started</div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  )
}

export default AuthPage
