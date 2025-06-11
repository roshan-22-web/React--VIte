import React from "react"
import { Link } from "react-router-dom"
const Notfound = () => {
  return (
    <div>
        <h1>404 Error Found</h1>
        <p>Check your route is correct</p>
        <Link to="/">Back to home </Link>
    </div>
  )
}

export default Notfound