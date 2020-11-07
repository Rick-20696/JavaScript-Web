//Vou usar o mesmo exemplo de "Attributes.ts"
{
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
        
        private priceDescont(): number {
            return this.price - (this.descont * this.price);
        }

        //Também tenho a opção de colocar métodos com os modificadores de acesso. 
        //Vale lembrar que os métodos e atributos publicos não precisam já que por padrão são públicos
        public toString(): string {
            return `Product: ${this.name} -> Price: ${this.priceDescont()}`; 
        }
    }

    console.log(new Product('Notebook', 2430, 0.3).toString());
    
}