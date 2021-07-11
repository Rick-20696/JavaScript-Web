import React from 'react'

export default class ClassComponent extends React.Component {
  state = {
    name: 'Ricardo'
  }
  
  changeInput(e) {
    this.setState({name: e.target.value})
  }

  render() { 
    console.log('Redering...')
    const { name } = this.state
    
    return( 
      <div>
        <h1>Class Component</h1>
        <h3>Hello {name}</h3>
        <input type="text" placeholder="Enter your name" value={name} onChange={e => this.changeInput(e)}/>
      </div>
    )
  }

}