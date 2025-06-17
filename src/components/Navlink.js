import React from 'react'
import { Link } from 'react-router-dom'

export default function Navlink() {
  return (
    <div>
        <ul>
            <Link to="/">
                Home
            </Link> 
            <Link to="/about">
                About
            </Link>
            <Link to="/profile">
                Profile
            </Link>
        </ul>
      
    </div>
  )
}
