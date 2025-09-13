import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Home from './components/Home'
// import { items } from './api.json'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <div className='app'>
      <Header />
      <Outlet />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
    errorElement: <Error />,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={appRouter} />)
