const express = require('express');
const routes = express.Router();
const ProductController = require('./controllers/ProductController');
//Agora minha lógica fica no Controller. Aqui eu só chamo o nome da função que está sendo exportada!

routes.get('/products',  ProductController.index);
routes.get('/products/:id', ProductController.show);

routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);

//O parâmetro vem pela rota e é representado por "model/:nameParameter"
routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;