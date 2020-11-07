//A vatangem de haver classes abstratas são serventes de classes pai/mãe. Vale lembrar que métodos abstratos deverão ser implementados pelos herdeiros
{
    abstract class Phone {
        private configs: string;
    
        constructor(configs: string){
            this.configs = configs;
        }
    
        abstract powerOn(): void
        abstract powerOff(): void
    }

    class MotoES6Plus extends Phone {
        
        //Os herdeiros não podem mudar a assinutura dos métodos obrigatórios a serem implementados (métodos abstratados de super)
        //Também devo impplementar todos eles.

        //powerOff(a:number): void {}
        powerOff() {}

        powerOn(): void {

        }
    }
}