//Módulos não funcionam no browser, porém no node, workflows vão funcionar a seguinte sintaxe.

//A grande maioria dos artifícios de importação (alias, destructuring, etc), funciona com TS

//Eu obrigatóriamente tenho que usar as chaves para esses casos que não tem exports default.
//import {print} from './Module1';
//print('algo');

//Para casos com o exports default eu consigo usar o nome do próprio nome do módulo ou então qualquer nome
import print from './Module1';
print('algo');