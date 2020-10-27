const notes = [3.4, 6.5, 7.6, 7.3];

//Sem callback
let notes2 =  [];
for(i in notes){
    if(notes[i] < 7){
        notes2.push(notes[i])
    }
}

console.log(notes2);

//com callback. Eu estou usando o Arrow, mas a grande questão do callback aqui é o filter()!
//a função callback é a função passada para o filter() e este é o evento
notes2 = notes.filter((note) => note > 7);
console.log(notes2);