import React from 'react'

export default class ClassComponent extends React.Component {
  state = {
    name: 'Ricardo'
  }
  
  constructor(props){
    super(props)

    this.log = this.log.bind(this)
  }

  //No React não existe To Way DataBiding, aqui o componente é controlado pelo estado.  
  //Para alterar o campo aqui por exemplo, devo fazer isso internamente
  changeInput(e) {
    this.log()
    this.setState({name: e.target.value})
  }

  //Pode-se invocar a função diretamente em um elemento html ou referenciá-la.
  //O problema é a variação do this. A solução é usar .bind(this) no constructor.
  log() {
    console.log(this)
  }

  render() { 
    console.log('Redering...')
    const { name } = this.state
    
    return( 
      <div>
        <h1>Class Component</h1>
        <h3>Hello {name}</h3>
        <input 
          type="text" 
          placeholder="Enter your name" 
          value={name} 
          onChange={e => this.changeInput(e)}
        />
        <button onClick={this.log}>Click-me</button>
      </div>
    )
  }

}