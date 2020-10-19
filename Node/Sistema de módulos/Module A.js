/* 
 * O node como servidor pode funcionar como um provedor de muitos contéudos ou como uma API.
 * Cada arquivo é um módulo. Cada módulo tem seu escopo próprio. 
 * O compartilhamento de código entre módulos funciona através da importação e exportação
 * 
 * Algumas formas de exportação:
 */

//O this do node é algo diferente, digamos que ele referencia o objeto próprio, ou seja, o módulo atual. 
//Sim, o módulo é um objeto
this.hello = 'Hello!!!'
exports.wellcome = 'Wellcome, people'
module.exports.bye = 'Bye, see you later'

//Tudo que está fora da exportação, seja dessas 3 maneiras ou da maneira do "ModuleB.js", não vai estar visível para quem está importando
console.log(this);