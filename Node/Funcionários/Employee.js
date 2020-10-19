const axios = require('axios');
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';

//Fazendo uma requisição para o arquivo .json da url
axios.get(url).then(response => {
    
    //Aqui eu estou pegando, numa lista de 500 funcionários, qual a mulher chinesa com menor salário
    const data = response.data;

    const getWoman = emp => emp.genero === 'F';
    const getNation = emp => emp.pais === 'China'
    const getMinSalary = (ac, s) => ac.salario < s.salario? ac : s

    //O fato de eu estár filtrando dos 500 apenas os chinese me trás um benefício de desempenho porque a lista será bem menor
    const employee = data.filter(getWoman).filter(getNation).reduce(getMinSalary);
    
    console.log(employee);
})