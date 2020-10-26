//Como eu posso ter módulos que retornam funções, eu posso muito bem passar parâmetros
//No escopo da função que está sendo importada, será normal. Já quando eu importar, eu já invoco passando parâmetro
const arrayNames = ['Teixeira', 'Herran', 'Aline']

const names = require('./Parameter to module')(arrayNames);
console.log(names);