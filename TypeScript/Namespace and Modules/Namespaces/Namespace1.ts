//Namespace são exatamente são espécies de escopos para nomes únicos. Isso ajuda a fugir do escopo global...
//Ao invés de fazer como antes, definia um escopo normal com "{}", eu crio uma namespace e tudo que eu for acessar deve ser ferenciado.

namespace Area {
    //Tudo o que eu quiser expor necessita do "export"

    export const PI = 3.141592653589793;

    export function circleArea(radius: number) {
        return PI * Math.pow(radius, 2)
    }

    export function reactangleArea(base: number, height: number){
        return base * height;
    }
}

//O conceito de namespace é extamente ter algo de nome único, mesmo que os valores sejam iguais
console.log(Area.circleArea(19), Math.PI);
console.log(Area.PI === Math.PI);

