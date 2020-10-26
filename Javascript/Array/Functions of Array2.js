//Mais algumas funções
const pilots = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

//Pop() -> Remove o último elemento
pilots.pop()
console.log(pilots);

//Shigt() -> Remove o primeiro
pilots.shift();
console.log(pilots);

//unshift() -> Adiciona no primeiro índice
pilots.unshift('Hamilton');
console.log(pilots);

//Splice()

//Adição -> A partir do índice 1 (Alonso), remova 0 elementos e adicione, antes do índice 1 (alonso), os respectivos elementos
pilots.splice(1, 0, 'Bottas', 'Massa')
console.log(pilots);

//Removendo -> remova o índice 3 (alonso) e quem estiver na frente dele volta 1 índice, trás os elemento
//pilots.splice(3) - Remova geral a partir do índice 3 (alonso)
pilots.splice(3, 1);
console.log(pilots);

//Slice() -> Sub Array
const subArray = pilots.slice(2); //Do índice 2 a frente 
const subArray2 = pilots.slice(1, 3); //Do índice 1 até o 3 retirando esse
console.log(subArray, subArray2);
