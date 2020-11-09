//Posso ter a quebra de namespace em arquivos, no caso quebrei neste e em "Namespace3ii.ts"
export namespace Geometry{
    export namespace Area2 {
     
        export const PI = 3.14;
    
        export function circleArea(radius: number) {
            return PI * Math.pow(radius, 2)
        }
    }
}