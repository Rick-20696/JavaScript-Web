//Existem atributos apenas para leitura no TS. Não são constantes, e sim atributos comuns

{
    class MyDate {
        readonly day: number
        readonly month: number
        readonly year: number

        //O construtor vai funcionar como os outros métodos, reclama senão haver tipagem nos params
        constructor(day: number = 1, month: number = 1, year: number = 1970) {
            this.day = day;
            this.month = month;
            this.year = year;
        }
    } 

    const date = new MyDate;

    console.log(date.day);

    //Não consigo mexer
    //date.day = 39;
    
}