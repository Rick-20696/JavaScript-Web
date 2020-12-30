// ***Imports***
const express = require('express');
const database = require('./database/database')

// ***Outras constantes***

//Toda aplicação que faz comunicação de rede, precisa de uma porta (processo em rede). 
//Como um PC pode ter vários processos em diferentes portas, eu preciso especificar a porta que vai atender as requisições
const door = 3333;

// ***Instanciando o aplicação (express)***
const app = express();

//Assim eu permito a entrada de dados no formato JSON, mas eu poderia passar dados com URL uncoded
app.use(express.json())

//GET é uma forma de requisição, toda requisição pode receber uma rota (no caso products), e uma função middleware como resposta
//Eu posso usar USE no lugar de GET, assim eu consigo atender todos os tipos de requisições
app.get('/products', (req, resp, next) => {
    const products = database.getProducts(); 
    
    //send() sempre converte os objetos que foram passados para o método
    resp.send(products);
});

app.get('/product/:id', (req, resp) => {
    const id = req.params.id;
    const product = database.getProduct(id);

    resp.send(product);
});

//POST é um tipo de requisição que faz a criação de atributos
app.post('/product', (req, resp) => {
    const {name, price} = req.body;
    const product = {
        name, 
        price
    }
    resp.send(database.save(product));
})


//A minha API vai ficar escutando na porta que eu defini antes
app.listen(door, () =>{
    console.log('Server was started successfully in door: ' + door);
})