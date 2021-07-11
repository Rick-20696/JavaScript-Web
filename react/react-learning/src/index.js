import React from 'react'
import ReactDOM from 'react-dom'

import First from './components/First'
import Greeting from './components/Greeting'

const container = <div>
  <First />
  <Greeting name="Sousa" />
</div>

ReactDOM.render(container, document.getElementById('root'))