import React from 'react'
import ReactDOM from 'react-dom'

import First from './components/First'
import Greeting from './components/Greeting'
import ClassComponent from './components/ClassComponent'
import Father from './components/Father'

const container = <div>
  <First />
  <Greeting name="Sousa" />
  <ClassComponent name="Sousa" />
  <Father name="Ricardo" lastName="Sousa" />
</div>

ReactDOM.render(container, document.getElementById('root'))