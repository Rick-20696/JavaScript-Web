//For é ideal para loops com repetições determinadas;

const fromXToY = function (x, y){
    //Validação para que não haja erros
    if(x > y){
        let aux = x; x = y; y = aux; 
    }
    
    for(i = x; i <= y; i++){
        console.log(i, "->", y);
    }
}

fromXToY(0, 10);
console.log();
fromXToY(20, 10);
