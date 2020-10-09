//Trabalhando com axios
import axios from 'axios';

class api {
    static async getUserInfo(user){
        
        //Todas as funções do axios retornam promisses
        console.log(await axios.get(`https://api.github.com/users/${user}`))
        
    }
}

api.getUserInfo('Rick-20696')