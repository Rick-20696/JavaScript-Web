//Os alias (apelidos) funcionam como tipos personalizados, por exemplo eu posso criar um tipo 
type employee = {sups: Array<string>, point: (hour: number) => string}

const employee2: employee = {
    sups: [
        'Teixeira',
        'Herran',
        'Sousa'
    ],
    point: (hour: Number): string => {
        let str = 'On time'
        
        if(hour > 8)
            str = "You're late"

        return str;
    }
}
