//Pegando o array e vendo se há alunos bolsistas e se todos são bolsistas
const students = [
    {name: 'Aline', note: 6.78, scholarship: false},
    {name: 'Teixeira', note: 7.8, scholarship: true},
    {name: 'Ricardo', note: 9.88, scholarship: false},
    {name: 'Sousa', note: 6.54, scholarship: true}
]

//Como estou mapeando os elementos para apenas o atributo boleano "Scholarship", eu uso a tabela da verdade:
//Apenas se esta expressão, 'ac' e 's' == true, acontecer em todas as iterações que os alunos serão todos bolsistas
const allShcolarship = students.map(s => s.scholarship).reduce( (ac, s) => {
    return ac && s
})

console.log(allShcolarship);

const anyAreScholarship = students.map(s => s.scholarship).reduce( (ac, s) => {return ac || s })
console.log(anyAreScholarship);
