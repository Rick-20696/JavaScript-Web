//

const arrayObject = {
    0: 'index 0',
    1: 'index 1',
    2: 'index 2',
}
console.log(arrayObject);

Object.defineProperty(arrayObject, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false,
})

console.log(arrayObject[0]);
console.log(arrayObject.toString());
