/**
 * A ideia de se ter um padrão middleware (chain of resposabillity) é desacoplar de uma função, os mini passos a serem dados!
 * Não é apenas a questão de que você terá reuso, mas sim de que, se você tiver uma outra função que execute os mesmos mini passos, mas em ordem diferente, você não precisará de uma reeimplementação.
 * 
 */

//Middlewares
const pass1 = (ctx, next) => {
    ctx.value1 = '1';
    next()
}
const pass2 = (ctx, next) => {
    ctx.value2 = '2';
    next()
}
const pass3 = (ctx) => ctx.value3 = '3';

//Eu tenho um processo principal (função) que vai executar as funções middlewares
//Basicamente ela vai executar todas as funções passando através de uma callback
const exec = (ctx, ...middlewares) => {
    const execMiddleware = index => {

        if(middlewares && index < middlewares.length)
            middlewares[index](ctx, () => execMiddleware(index + 1))
    }
    execMiddleware(0);
}

const ctx = {};
exec(ctx, pass2, pass1, pass3)
console.log(ctx);

