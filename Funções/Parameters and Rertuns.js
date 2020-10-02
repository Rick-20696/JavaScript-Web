//Retornos não são obrigatórios
function area (a, b) {
    let area = a * b;

    if(area > 100){
        console.log("Área acima do permitido");
    } else{
        return area;
    }
}

//Eu posso passar apenas um, dois, nenhum ou muitos paraâmetros. Essa última não faz sentido já que serão ignorados
//No caso de parâmetros faltantes, nessa função, da problema pois undefined * número/undefined é Na
console.log(area(10, 10));
console.log(area(10));
console.log(area());
console.log(area(2, 3, 4, 5, 6, 7, 8, 9,));
