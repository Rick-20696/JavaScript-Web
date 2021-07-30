import './Main.css'
import React, { Fragment } from 'react'
import Header from './Header'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
  (
    <Fragment>
      <Header {...props}/>
      <main className="content">
        Conteúdo
      </main>
    </Fragment>
  )