//Promise são promesas e claro que isso está relacionado a coisas futuras. Eu prometo algum código e o retorno desse código será no futuro também!
//Aqui eu já tenho disponível a variável para usar, no caso do valor retornado de uma promise, eu só tenho disponível depois.
let a = 1;
console.log(a);

//Uma promise recebe uma função, essa função é o processo da promessa e ela recebe outras duas funções tratadoras de responder sobre o resultado (reject, resolve).  
const salaryPromise = new Promise((resolve) => {

    //Prometi retorna uma lista de alunos

    //A função que  responde, só retorna um valor. Multiplos valores devem estar estruturados    
    resolve(['Teixeira', 'Herran', 'Hilário', 'Ricardo'])

});

//Forma errada de pegar o valor
//console.log(salaryPromise);

//Forma certa, preciso usar o .then() que recebe uma callback. Eu posso também encadear varios .then() lembrando que ele recebe um único parâmetro
salaryPromise.then(value => console.log(value));

salaryPromise
    .then(students => students[0])
    .then(student => console.log(student));
