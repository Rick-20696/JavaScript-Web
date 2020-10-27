Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback));
}

const school = [
    {
        name: 'M1',
        students:[{
            name: 'Teixeira',
            note: 7.75
        }]
    },
    {
        name: 'T1',
        students:[{
            name: 'João',
            note: 5.95
        }]
    },
    {
        name: 'N1',
        students:[{
            name: 'Ricardo',
            note: 7.00
        }]
    }
]

const getNote = s => s.note;
const getNotes = c => c.students.map(getNote);

console.log('Notes v1 ->', school.map(getNotes));
console.log(school.flatMap(getNotes));
