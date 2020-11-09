//Eu também posso quebrar a minha organização em namespace em aninhamentos
namespace Geometry{
    export namespace Area {
     
        export const PI = 3.141592653589793;
    
        export function circleArea(radius: number) {
            return PI * Math.pow(radius, 2)
        }
    
        export function reactangleArea(base: number, height: number){
            return base * height;
        }
    }
}

//Claro que a minha chamada muda e deve ser aninhada da forma que foi estruturada
console.log(Geometry.Area.circleArea(19), Math.PI);
console.log(Geometry.Area.PI === Math.PI);

