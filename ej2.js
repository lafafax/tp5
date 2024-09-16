var precios=[];
var cont=0;
var acumulador=0;
while (cont<6){
    var precio=parseFloat(prompt("ingrese el precio de cada producto"));
    precios.push(precio);
    cont++
}
var monto=precios.reduce((acumulador,precio)=>acumulador+precio);
document.write(`monto total a pagar: ${monto}`);