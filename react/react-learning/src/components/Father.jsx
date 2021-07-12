import React from 'react'

//Eu posso passar prop por prop do componente filho,
//Usar spreed operator do pai para filho e sobrescrever.

//Dependendo de qual ficar à esquerda, o valor sobreescrito 
const componente = props =>
<div>
  <h1>Father - {props.name} {props.lastName}</h1>
  <hr />
  <ul>
    {/* {props.children} - Dessa forma consigo passar os componentes
        porém, terei de passar as propriedadaes manualmente
     */}

     {/* React.cloneElement(props.children, {...props, ...props.children.props}) -
        Dessa forma eu consigo passar, reaproveitar props do pai e resolver conflitos de props
        Usando as props do filho como superior. Porém não funciona para vários filhos
      */}

      {
        React.Children.map(props.children, child => {
          return React.cloneElement(child, {...props, ...child.props})
        })

      }
  </ul>
</div>

export default componente