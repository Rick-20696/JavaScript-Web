import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import React from "react"
import Nav from '../components/template/Nav'
import Main from '../components/template/Main'
import Logo from '../components/template/Logo'
import Footer from '../components/template/Footer'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => 
  (
    <div className="app">
      <Logo />
      <Nav />
      <Main icon="home" title="Início" subtitle="Crud Project React"/>
      <Footer />
    </div>
  )