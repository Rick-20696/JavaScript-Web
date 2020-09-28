//Maneiras que posso relançar um erro
function printErrorName(error){
    //throw new Error ("Undefined");
    //throw 10;
    //throw false;
    //throw "error";
    throw {
        name: "blablabla",
        id: "78",
        date: new Date
    }
}

function printNameUpperCase(obj){
    //Comando que gera erro (Tô passando um objeto com "name" indefinido)
    try{
        console.log(obj.name.toUpperCase() + "!!!");
    } catch (exception) {
        printErrorName(exception);
    } finally{
        console.log("fim do programa");
    }
}

const people = {
}

//printNameUpperCase(obj);
printNameUpperCase(people);
