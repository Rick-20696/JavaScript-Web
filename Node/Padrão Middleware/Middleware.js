/**
 * A ideia de se ter um padrão middleware (chain of resposabillity) é desacoplar de uma função, os mini passos a serem dados!
 * Não é apenas a questão de que você terá reuso, mas sim de que, se você tiver uma outra função que execute os mesmos mini passos, mas em ordem diferente, você não precisará de uma reeimplementação.
 * 
 */

//Middleware
const pass1 = (ctx, next) => {
    ctx.value = '1',
    next()
}
const pass2 = (ctx, next) => {
    ctx.value = '2',
    next()
}
const pass1 = (ctx) => ctx.value = '3';

const exec = (ctx, ...middlewares) => {
    
}
