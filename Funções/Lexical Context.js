//Quando a função carrega consigo onde ela foi declarada, ou seja, seu contexto léxico. 
//Por isso que será escrito "global" e não "local" 
const value = 'global';

function print() {
    console.log(value);
}

function run() {
    const value = 'local';
    print();
}

run();