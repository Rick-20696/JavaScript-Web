//A ideia de usar o padrão singleton é usar em contextos onde é muito custoso do ponto de vista de desempenho e gerenciamento de códgio, como uma conexão com banco de dados

//A sintaxe de uma classe desse padrão é ter um atributo único, sem possibilidade de instanciar classes e apenas com métodos para agir sobre o atributo
{
    class Connection {
        private static connection: Connection = new Connection;
        private constructor() {}

        static getConnection() {
            //Por questão de clareza de código, é apropriado usar o tipo da classe no lugar do this, afinal eu estou pegando da classe
            return Connection.connection;
        }

        //Aqui eu não necessito do static porque eu vou me referenciar a instância (atributo)
        beginTransaction():string {
            return 'Opening transaction';
            
        }
        
        commitTransaction():string {
            return 'Comitting';
            
        }
    }

    console.log(Connection.getConnection());
    console.log(Connection.getConnection().beginTransaction());
}