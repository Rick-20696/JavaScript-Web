/**
 * Um exemplo de como funcionaria a definição de tipos num cenário mais próximo do real.
 * Tenho um objeto funcionáiro onde seus atributos tem seus próprios tipo
 */
const employee: {sups: Array<string>, point: (hour: number) => string} = {
    sups: [
        'Teixeira',
        'Herran',
        'Sousa'
    ],
    point: (hour: Number): string => {
        let str = 'On time'
        
        if(hour > 8)
            str = "You're late"

        return str;
    }
}

console.log(employee.point(7));
console.log(employee.point(8));
console.log(employee.point(9));


