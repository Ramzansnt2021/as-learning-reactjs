import React from 'react'
import ReactDOM from 'react-dom/client'

const heading = React.createElement('h1', { id: 'heading' }, 'Hello World')

//jsx

const jsxHeading = <h1 id='heading'>Hello World</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)
