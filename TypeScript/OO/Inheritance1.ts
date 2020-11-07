//A herança funciona normalmente como em outras linguagens. Tenho reuso, modificadores implicam, etc...
{
    class Product {
        protected name: string
        protected price: number
        protected descont: number

        constructor(name: string, price: number, descont: number = 0){
            if(name == undefined || price == undefined)
                throw new Error('Name and Price are not defined');
            
            if(price <= 0)
                throw new Error('Price or Descont is invalid');

            if(name.length == 0)
                throw new Error('Name is invalid');

            this.name = name;
            this.price = price;
            this.descont = descont;
        }
        
        protected priceDescont(): number {
            return this.price - (this.descont * this.price);
        }

        public toString(): string {
            return `Product: ${this.name} -> Price: ${this.priceDescont()}`; 
        }
    }
    
    //Minha classe herdada será um produto de uma marca específica
    class NotebookVaio extends Product{
        private model: string
        
        constructor(name: string, model: string, price: number){
            super(name, price);

            this.model = model;
        }

        //A sobreescrita não precisa da definição de tipagem de retorno, basta retornar o tipo correto 
        //O proble é  com os métodos privados... Mesmo com super, só acesso se estiver no nível public ou protected
        toString() {
            return `
            Product: ${this.name}
            Model: ${this.model}
            Price: ${super.priceDescont()}
            `
        }
    }

    console.log(new NotebookVaio('012VCA', 'Modern', 2450).toString());
    

    
}