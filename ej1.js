var notas = [];
var cantidadNotas = 5; 
var acumulador=0;
for (let i = 0; i < cantidadNotas; i++) {
    var nota = parseFloat(prompt("ingrese la nota"));
    notas.push(nota);
}
var sumaTotal = notas.reduce((acumulador, nota) => acumulador + nota);
var promedio = sumaTotal / notas.length;
document.write(`suma total de las notas: ${sumaTotal}`);
document.write("<br>");
document.write(`promedio de las notas: ${promedio}`);