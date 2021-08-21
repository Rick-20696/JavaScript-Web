import '../../styles/Main.css'
import React, { Fragment } from 'react'
import { Header } from './Header'

// eslint-disable-next-line import/no-anonymous-default-export
export const Main = props => 
  (
    <Fragment>
      <Header {...props}/>
      <main className="content container-fluid">
        <div className="p-3 mt-3">
          {props.children}
        </div>
      </main>
    </Fragment>
  )