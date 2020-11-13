//Uma classe que implementa alguma inteface tem uma Herança, especificamente uma Herança de obrigatoriedade.
//Posso ter herança de classe para classe (extends), classe pra interface (implements), interface pra interface (extends).  

interface A {
    funcA(): void
}

interface B {
    funcB(): void
}

//Quando tenho isso, eu não tenho a obrigação de implementar
interface ABC extends A,B {
    funcC(): void
}

//Eu poderia implementar diretamente, mas resolvi fazer assim para demonstrar a possibilidade de interface pra interface
class AnyClass implements ABC {
    funcA() {}
    funcB() {}
    funcC() {}
} 

