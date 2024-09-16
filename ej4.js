var dinero = [];
var cantidadDinero = 5; 
var acumulador=0;
for (let i = 0; i < cantidadDinero; i++) {
    var plata = parseFloat(prompt("ingrese la cantidad de dinero"));
    dinero.push(plata);
}
var sumaTotal = dinero.reduce((acumulador, plata) => acumulador + plata);
document.write(`suma total del dinero a: ${sumaTotal}`);
