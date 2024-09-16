var nafta = [];
var cantidadLitros = 5; 
var acumulador=0;

for (let i = 0; i < cantidadLitros; i++) {
    var litro = parseFloat(prompt("ingrese la cantidad de nafta"));
    nafta.push(litro);
}

var sumaTotal = nafta.reduce((acumulador, litro) => acumulador + litro);

document.write(`suma total de la nafta: ${sumaTotal}`);
