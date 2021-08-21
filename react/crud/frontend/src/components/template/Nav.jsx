import '../../styles/Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

const routes = [
  { route: '/', iconName: 'home', label: 'Início' },
  { route: '/users', iconName: 'users', label: 'Usuários' },
]

// eslint-disable-next-line import/no-anonymous-default-export
export const Nav = props => 
  <aside className="menu-area">
    <nav className="menu">
      {
        routes.map((route, i) => {
          return (
            <Link key={i} to={route.route}>
              <i className={`fa fa-${route.iconName}`} /> {route.label}
            </Link>
          )
        })
      }
    </nav>
  </aside>