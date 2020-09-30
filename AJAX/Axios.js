//O Axios faz requisições assíncronas. Por baixo dos panos ele chama o XMLHttpsRequest. 
//Pelo Axios é bem mais facíl retornar os dados, porque não é mais um JSON 
axios.get("https://api.github.com/users/Rick-20696")
    .then(function(response) {console.log(response)})
    .catch(function(error) {console.log(error)});