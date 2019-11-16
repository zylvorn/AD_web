import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux/store'
import serviceWorker from './service-worker'
import './assets/all.css'
import App from './app'

const element = document.getElementById('root')

const ReduxRender = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

render(<ReduxRender />, element)
serviceWorker()
