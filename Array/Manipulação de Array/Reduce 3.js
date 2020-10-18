//Uma implementação do reduce, de uma forma bem básica sem o valor inicial
Array.prototype.reduce2 = function(callback) {
    let accumulator = this[0];
    for(let i = 1; i < this.length; i++){
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
}

const students = [
    {name: 'Aline', note: 6.78, scholarship: false},
    {name: 'Teixeira', note: 7.8, scholarship: true},
    {name: 'Ricardo', note: 9.88, scholarship: false},
    {name: 'Sousa', note: 6.54, scholarship: true}
]

const totalNotes = students.map(s => s.note).reduce( (ac, n) => {
    return ac + n
})

console.log(`The total sum of notes is ${totalNotes}`);