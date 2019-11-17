import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class index extends Component {
  render() {
    return <h1 className='text-center'>order module</h1>
  }
}

const mapStateToProps = state => ({
  ...state
})
index.propTypes = {
  prop: PropTypes.any
}
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(index)
