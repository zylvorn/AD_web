import React from 'react'
import Loadable from 'react-loadable'

const Loading = () => <h1 className='text-center mt-2'>Loading</h1>

const Dashboard = Loadable({
  loader: () => import('../modules/default'),
  loading: Loading
})

const Chats = Loadable({
  loader: () => import('../modules/chats'),
  loading: Loading
})

const Order = Loadable({
  loader: () => import('../modules/order'),
  loading: Loading
})

const Profile = Loadable({
  loader: () => import('../modules/profile'),
  loading: Loading
})

export default [
  { component: Dashboard, path: '/dashboard' },
  { component: Chats, path: '/chats' },
  { component: Order, path: '/order' },
  { component: Profile, path: '/profile' }
]
