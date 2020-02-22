function saludar(nombre){
    console.log(`Hola ${nombre}`);
}
saludar('Alexa')

function saludar(nombre){
    return `Hola ${nombre}`;
}

var mensaje = saludar('Alexa');
mensaje;

function sumar(a, b){
    return a + b;
}

var resultado = sumar(3, 4);
resultado