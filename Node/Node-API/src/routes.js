const express = require('express');
const ProductController = require('./controllers/ProductController');

//Estou separando a instância de rotas do express e colocando na constante
const routes = express.Router();

//Agora minha lógica fica no Controller. Aqui eu só chamo o nome da função que está sendo exportada!
//O parâmetro vem pela rota e é representado por "model/:nameParameter"
routes.get('/products',  ProductController.index);
routes.get('/products/:id', ProductController.show);

routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);

routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;