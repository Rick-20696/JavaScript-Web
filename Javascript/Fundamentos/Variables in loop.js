//Lembrando que var não tem escopo de bloco; ela estará disponível depois. Já o let não estará

for (var i = 0; i < 10; i++){
    
    console.log(i);
} 

console.log("Value of 'i' ", i);

for (let j = 0; j < 10; j++){
    console.log(j);
}

console.log("Value of 'j' ", j);