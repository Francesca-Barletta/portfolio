import React from 'react'
import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <h1>Page not found</h1>
      <Link to='/'>torna alla home</Link>
    </div>
  )
}

export default ErrorPage