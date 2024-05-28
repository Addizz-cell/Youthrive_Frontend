import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div id='Nav'>
        <ul>
            <li>
            <Link to={'/'}>Home</Link>
            </li>
            <li>
            <Link to={'/blog'}>Blog</Link>
            </li>
            <li>
            <Link to={'/club'}>Club</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav