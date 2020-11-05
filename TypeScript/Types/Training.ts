import { type } from "os"

//Colocando tipos em um código que não tem tipagem difinida
type bank = {
    saldo: number,
    depositar: (valor: number) => void
}

type client = {
    nome: string,
    contaBancaria: bank,
    contatos: Array<string>
}

let contaBancaria: bank = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor
    }
}
 
let correntista: client = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)