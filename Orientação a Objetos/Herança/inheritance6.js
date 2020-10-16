function Clas(name, id){
    this.name = name,
    this.id = id
}

//Quando eu uso o new o __proto__ vai apontar para a função construtora.prototype. No caso: Class.prototype
const cl1 = new Clas('Inheritance #6', 101);
const cl2 = new Clas('Inheritance #5', 100);
const cl3 = Clas('Inheritance #5', 100);

console.log(cl1, ' - ', cl2, ' - ', cl3);

function newObject(func, ...args) {
    const obj = {}
    obj.__proto__ = func.prototype
    func.apply(obj, args)

    return obj;
}

const cl4 = newObject(Clas, 'Class #1', 104)
const cl5 = newObject(Clas, 'Class #2', 105)

console.log(cl4, cl5);
console.log(cl4.__proto__ === Clas.prototype);