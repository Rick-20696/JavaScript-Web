//Eu não conseguiria usar apenas Array para amarrar a tipagem à constante, justamente porque Array é uma classe genérica em TS

namespace GenericsWithArray{

    //com tipagem genérica amarrada eu consigo definitivamente amarrar o tipo
    const notes: Array<number> = [];
    notes.push(7.8);
    notes.push(6.74);
    notes.push(9.99);
    //notes.push('10');

    //Aqui eu tenho uma função genérica que recebe um array do tipo genérico
    function printGenericArray<T> (...args: T[]) {
        args.forEach((e) => console.log(e));
    }

    printGenericArray(notes);
}