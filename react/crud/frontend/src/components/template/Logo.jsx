import '../../styles/Logo.css'
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

// eslint-disable-next-line import/no-anonymous-default-export
export const Logo = props => 
  (
    <aside className="logo">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" className="src" />
      </Link>
    </aside>
  )