import React from 'react'
import ReactDOM from 'react-dom'

import First from './components/First'
import Greeting from './components/Greeting'
import ClassComponent from './components/ClassComponent'
import Father from './components/Father'

import Children from './components/Children'

const container = <div>
  <First />
  <Greeting name="Sousa" />
  <ClassComponent name="Sousa" />
  <Father name="Ricardo" lastName="Sousa" >
    <Children name="Bruno" lastName="Teixeira"/>
    <Children name="João" />
    <Children name="Lalinha" />
  </Father>
</div>

ReactDOM.render(container, document.getElementById('root'))