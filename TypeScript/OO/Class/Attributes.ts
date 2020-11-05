//Vamos criar uma classe Data

{
    class MyDate {
        //Os atributos são criados como no ES. Lembrando que esses são publicos...
        //O ES não suporta essa sintaxe, seria algo do tipo: day = 0.

        day: number
        month: number
        year: number

        //O construtor vai funcionar como os outros métodos, reclama senão haver tipagem nos params
        constructor(day: number = 1, month: number = 1, year: number = 1970) {
            this.day = day;
            this.month = month;
            this.year = year;
        }
    } 

    console.log(new MyDate(30, 08, 2001), new MyDate);
    
    //Criando a mesma classe com uma sintaxe mais enxuta e até mais clara. Porém menos organizada...
    class MyDate2 {
        constructor(public day2: number = 1, public month2: number = 1, public year2: number = 1970){
        }
    }

    console.log(new MyDate2);
 
    //Nada impede de eu usar o modificador de acesso como no primeiro exemplo
    class Product {
        public name: string
        public price: number
        public descont: number

        constructor(name: string, price: number, descont: number = 0){
            if(name == undefined || price == undefined)
                throw new Error('Name and Price are not defined');
            
            if(price <= 0 || descont <= 0)
                throw new Error('Price or Descont is invalid');

            if(name.length == 0)
                throw new Error('Name is invalid');

            this.name = name;
            this.price = price;
            this.descont = descont;
        }
    }

    console.log(new Product('Notebook', 2430), new Product('E6+', 950, 0.3));
    
}