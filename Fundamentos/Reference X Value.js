// atribuição por valor != atribuição por referência 

//"a" e "b" recebe o endereço de memória do object, se eu alterar algo a partir de "b" será mudado no objeto e "a" vai recebe a mudança 
const a = {
    id: 1
};
console.log(a.id);

const b = a;
b.id = 2;
console.log("\n" + a.id);
console.log(b.id);

//Se eu alterar um valor não irá cascatear para a outra variável, o que eu atribuí é um literal primitivo
let c = 3;
let d = c;

d++;
console.log("\n" + c);
console.log(d);
