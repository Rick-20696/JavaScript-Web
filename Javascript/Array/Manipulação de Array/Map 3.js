//Uma implementação de como o map funciona
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

Object.defineProperty(array, 'map2', {
    value: function (callback){
        const newArray = [];

        for(let i in this){
            newArray.push(callback(this[i], i, this));
        }

        return newArray;
    }
})

const array2 = array.map2( e => e * 2);
console.log(array, array2);