let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//For in é uma espécie de ForEach -> Percorre todos os elementos por índice
for (number in numbers){
    console.log(number);
}

console.log();

//For of é básicamente a mesma coisa
for (number of numbers){
    console.log(number);
}

//Percorrendo os atributos de um objeto

const settings = {
    "window.zoomLevel": -2,
    "explorer.confirmDelete": false,
    "workbench.iconTheme": "material-icon-theme",
    "explorer.confirmDragAndDrop": false
}

for (attribute in settings){
    console.log(`${attribute} -> ${settings.attribute}`);
}
