"use strict";
/** O tsconfig é onde tem algumas opções para compilação e uso
 * noEmitOnError:
 * Existem erros que gerados pelo TS, porém o JS consegue rodar, por exemplo o código abaixo.
 *
 * Para suprimir esses erros podemos usar "noEmitOnError" como true para não gerar o arquivo JS
 * Em TS não existe o conceito de módulos, então sempre haverá problemas com nomes repetidos a não ser que eu altere o escopo.
 * Eu vou contornar isso colocando escopos
 */
{
    const user = 'Teixeira';
    const idUser = 1;
    //user = idUser;
    console.log(user);
}
/**
 * Target:
 * O Target aponta para qual versão do JS eu vou apontar para qual versão do JS será transformado o arquivo TS
 */
/**
 * SourceMap:
 * É uma propriedade que separa o código gerado para produção para um arquivo .map e separa as linhas de código.
 * Isso ajuda na manutenção do código TS, debuggar.
 */
/**
 * strickNullChecks e noUsedParameters
 *
 * Ajuda verificar se haverá problemas com relação a valores nulos,
 * também parâmetros não usados
 */
{
    function greting(isMorning) {
        //Eu poderia contornar atribuindo um texto vázio ou com else
        let text = '';
        if (isMorning) {
            text = 'Good Morning';
        }
        return text;
    }
}
