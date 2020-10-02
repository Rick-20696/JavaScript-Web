//Callback no browser

//Explicitando melhor o conceito de evento é só no browser!
//Executando o código abaixo no console do browser e depois, após clicar na tela, a função arrow é chamada de volta!
document.getElementsByTagName('body')[0].onclick = (e) => {console.log('o evento ocorreu');};