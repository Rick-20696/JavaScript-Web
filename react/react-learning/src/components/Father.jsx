import React from 'react'
import Children from './Children'

//Eu posso passar prop por prop do componente filho,
//Usar spreed operator do pai para filho e sobrescrever.

//Dependendo de qual ficar à esquerda, o valor sobreescrito 
const componente = props =>
<div>
  <h1>Father - {props.name} {props.lastName}</h1>
  <hr />
  <ul>
    <Children name="Bruno" lastName="Teixeira"/>
    <Children {...props} name="João"/>
    <Children {...props}/>
  </ul>
</div>

export default componente