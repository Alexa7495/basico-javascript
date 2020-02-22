animales[2];
animales.pop(); //elimina elemento de la ultima posición

var animales = ['🐻', '🦁', '🐣'];
animales.push('🐬'); //agrega elemento en la última posición
animales.unshift('🦍'); //agrega elemento en la primera posición

for (var i = 0; i < animales.length; i++){
    console.log('animal:', animales[i]);
}

var admitidos = animales.filter(function(animal){
    return animal != '🐣';
});

admitidos;

