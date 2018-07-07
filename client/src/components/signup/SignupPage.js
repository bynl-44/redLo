import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SignupForm from './SignupForm'

export class SignupPage extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div className='row' >
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <SignupForm />
        </div>
        <div className="col-md-3"></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
