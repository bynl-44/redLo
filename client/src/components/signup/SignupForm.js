import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class SignupForm extends Component {
  static propTypes = {
    prop: PropTypes
  }
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      email: '',
      password: '',
      passwordre: '',
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
  }

  render() {
    return (
      <form>
        <h1>Join our community!</h1>
        <div className="form-group" onSubmit={() => this.handleSubmit} >
          <label htmlFor="" className="control-label">Username</label>
          <input
            type='text'
            name='username'
            value={this.state.username}
            className="form-control"
            onChange={() => this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="control-label">Email</label>
          <input
            type='email'
            name='email'
            value={this.state.email}
            className="form-control"
            onChange={() => this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="control-label">Password</label>
          <input
            type='password'
            name='password'
            className="form-control"
            onChange={() => this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="control-label">Password Confirmation</label>
          <input
            type='password'
            name='passwordre'
            className="form-control"
            onChange={() => this.handleChange}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg">Sign up</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)
