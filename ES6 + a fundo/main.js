//A sintaxe de importação de funções é "{nameFunction}". 
//Eu posso adicionar tudo de uma vez (import * as functions form...) e renomear também
import {sum as operation} from './Import and Exports';

//A importação de exportações default não necessita da sintaxe anterior, posso ter qualquer nome
import s from './Import and Exports';

console.log(operation(1, 2));
console.log(s(1, 2));