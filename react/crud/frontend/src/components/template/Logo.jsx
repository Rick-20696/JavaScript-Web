import './Logo.css'
import React from 'react'
import logo from '../../assets/logo.png'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
  (
    <aside className="logo">
      <a href="/" className="logo">
        <img src={logo} alt="logo" className="src" />
      </a>
    </aside>
  )