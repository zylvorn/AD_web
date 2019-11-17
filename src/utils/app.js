import React, { Component, Fragment } from 'react'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'reactstrap'

import Routes from './routes'
import Navbar from './navbar'

export class app extends Component {
  render() {
    const { location } = this.props
    const isAuth = localStorage.getItem('isAuth')
    return (
      <Fragment>
        <Navbar />
        <Container style={{ width: '80%' }}>
          <div style={{ marginBottom: 50 }} />
          <Switch>
            {Routes.filter(e =>
              isAuth ? e.path !== '/login' : e.path === false
            ).map(item => (
              <Route
                key={Math.random()}
                path={item.path}
                component={item.component}
              />
            ))}
            {!isAuth && <Redirect to='/login' />}
            {(location.pathname === '/' ||
                            location.pathname === '/login') &&
                            isAuth && <Redirect to='/dashboard' />}
            {isAuth ? (
              <Redirect to='/error' />
            ) : (
              <Redirect to='/login' />
            )}
          </Switch>
        </Container>
      </Fragment>
    )
  }
}
app.propTypes = {
  match: PropTypes.any,
  location: PropTypes.any
}
const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(app))
