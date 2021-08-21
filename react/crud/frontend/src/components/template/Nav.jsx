import '../../styles/Nav.css'
import React from 'react'

const BASE = '#' 
const routes = [
  { route: `${BASE}/`, iconName: 'home', label: 'Início' },
  { route: `${BASE}/users`, iconName: 'users', label: 'Usuários' },
]

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
  <aside className="menu-area">
    <nav className="menu">
      {
        routes.map((route, i) => {
          return (
            <a key={i} href={route.route}>
              <i className={`fa fa-${route.iconName}`} /> {route.label}
            </a>
          )
        })
      }
    </nav>
  </aside>