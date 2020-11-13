//A vantagem de usar generics sobre o tipo any é que eu posso me precaver de erros em situações de acessar atributos por exemplo
namespace GenericsFunction{
    
    //Quando eu faço isso, posso ter problemas se meu object não tiver o atributo length();
    function echo(object: any){
        return object;
    }
    
    console.log(echo('Generics').length);
    console.log(echo(123).length);
    
    //A minha função genérica do tipo T, não tem tipagem definida. Ela pode definir a tipagem por infererência ou então definir na chamada da função
    function echoGenerics<T>(object: T) {
        return object;
    }

    //No caso do 123 eu não consigo encontrar o .length
    console.log(echoGenerics('Generics').length);
    //console.log(echoGenerics(123).length);   
    console.log(echoGenerics<boolean>(true));   
} 