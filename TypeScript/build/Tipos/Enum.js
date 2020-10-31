"use strict";
//Enum -> Enumeration, é usado quando eu tenho valores definidos como os dias da semanas. É muito melhor do que fazer associações de valores
//É uma estrutura indexada como o array, mas eu posso mudar isso e a partir da mudança todos o índices abaixo serão mudados.
var Colors;
(function (Colors) {
    Colors[Colors["Black"] = 0] = "Black";
    Colors[Colors["Cyan"] = 10] = "Cyan";
    Colors[Colors["White"] = 11] = "White";
})(Colors || (Colors = {}));
;
//Eu posso acessar assim, porém o que é retornado, nesse caso é uma string
let color = Colors[0];
console.log(color);
color = Colors.Cyan;
console.log(color);
