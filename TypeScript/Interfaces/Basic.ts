//Uma interface é uma espécie de "classe base" usada para delimitar o que precisa ter no objeto que a implementa.
//No caso a minha interface eu delimito que um humano deve ter um nome e uma idade
namespace basic {

    interface Human {
        //Um atributo obrigatório
        name: string;

        //Atributo opcional
        age?: number
        
        //dinâmico, posso ou não ter e seu nome não precisa ser o que está definido aqui
        [property: string]: any
        
        //Métodos podem ser pré definidos. Devem ser métodos abstratos. Quem implementa a interface implementa todas as propriedades
        introduce(): void
    }
    
    const people1: Human = {
        name: 'Teixeira',
        age: 17,
        introduce(): void {
            console.log(`Hello, my name is ${this.name}`);
        }
    }
}