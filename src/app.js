import React, { Component, Fragment } from 'react'
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import store from './redux/store'

import MainApp from './utils/app'
import login from './modules/login'
import error from './modules/error'

export const app = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route path='/' component={Entry} />
        </Switch>
      </HashRouter>
    </Provider>
  )
}

export default app

export class Entry extends Component {
  render() {
    const { match } = this.props
    const isAuth = localStorage.getItem('isAuth')
    return (
      <Fragment>
        <Switch>
          {!isAuth && <Route path='/login' component={login} />}
          <Route path='/error' component={error} />
          <Route path={`${match.url}`} component={MainApp} />
          {isAuth ? (
            <Redirect to='/error' />
          ) : (
            <Redirect to='/login' />
          )}
        </Switch>
      </Fragment>
    )
  }
}
Entry.propTypes = {
  location: PropTypes.any,
  match: PropTypes.any
}
