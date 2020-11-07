//Os modificadores de acesso são do Typescript, JS não possue esse recurso. 
//Funciona normalmente como em Java, C#, etc...
{
    class Product {
        private name: string
        private price: number
        private descont: number

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
        
        private priceDescont(): number {
            return this.price - (this.descont * this.price);
        }

        public toString(): string {
            return `Product: ${this.name} -> Price: ${this.priceDescont()}`; 
        }
    }

    //Tentando acessar os privates. Vale lembrar que no JS gerado, eu consigo acessar os atirbutos (sim, estranho)
    const product = new Product('Notebook', 2430, 0.3);

    // console.log(product.priceDescont());
    //console.log(product.name);
    console.log(product.toString());
}
