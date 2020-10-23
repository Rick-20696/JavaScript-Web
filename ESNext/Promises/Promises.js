//Promisses são funções que não influenciam na linha de execução (ordem de execução do arquivo JS), mas devolvem a resposta, depois de um tempo, seja positivo ou não.
let promise = function() {

    //por padrão, a classe recebe uma função que tem como parâmetros duas funções.
    return new Promise(function(resolve, reject){
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "https://api.github.com/users/Rick-20696");
        xhr.send(null);

        xhr.onreadystatechange = function () {
            if(xhr.readyState === 4){
                
                //Requisições tem os seus status, o "200" é o status de sucesso. Qualquer outro é de falha.
                //Eu retorno um RESOLVE quando eu tenho sucesso e caso contrário eu retorno um REJECT 
                if (xhr.status === 200)
                    resolve(JSON.parse(xhr.responseText));
                else 
                    reject("Erro na requisição")
            }
        }
    });
}

//Como essa são requisições assíncronas, eu não tenho resposta na hora: A operação ainda irá terminar, então ela fica PENDENTE. Por isso que sem os tratamentos de "then()/catch()" aparece pendente
//O código de devolução da minha API é através do "then()" se der certo e "catch()" se der errado.

let respo = promise(); console.log(respo);
promise() .then( function(response) { console.log(response ); }) .catch( function(error) { console.warn(error ); });
