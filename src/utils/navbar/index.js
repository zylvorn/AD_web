import React, { Component } from 'react'
import { Container } from 'reactstrap'
import PropTypes from 'prop-types'
export class index extends Component {
  render() {
    return (
      <div
        className='nav-bar'
        style={{
          background: '#fda022',
          width: window.innerWidth,
          height: '50px'
        }}
      >
        <Container style={{ width: 1000 }}>
          <div className='text-center'>
            <h4>navbar</h4>
          </div>
        </Container>
      </div>
    )
  }
}
index.propTypes = {
  prop: PropTypes.any
}
export default index
