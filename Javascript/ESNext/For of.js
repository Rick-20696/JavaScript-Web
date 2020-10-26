//O for of é parecido com o for in, mas o for of se passa em cima de valores
const numbers = '123456789';
const tecs = {
    React: {Library: true, Framework: false},
    Jquery: {Library: true, Framework: false},
    Hibernate: {Library: false, Framework: false}
}

for(num of numbers){
    console.log('for of', num);
}

console.log();

for(let num2 in numbers){
    console.log('for in', num2);
}

for(tec of Object.keys(tecs)){
    console.log(tec);
}

for(tec of Object.values(tecs)){
    console.log(tec);
}

for(tec of Object.entries(tecs)){
    console.log(tec);
}
