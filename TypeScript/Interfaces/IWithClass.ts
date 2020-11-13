//Podemos atribuir o tipo de uma variável uma interface, porém ela é mais utilizada em classes.
//Diferente das variáveis, atributos a mais eu posso ter atributos amais

namespace InterfacewithClass {
    interface Human {
        name: string;
        age?: number
        
        introduce(): void
    }

    //Quando digo que uma classe implementa uma interface, ctrl+space dentro da classe implementadora já mostra tudo que devo e posso implementar.
    class Client implements Human {
        name = 'Ricardo';
        age = 19;
        occupation = 'Development';

        introduce(): void {
            console.log(`I'm ${this.name}`);
        }
    }
}