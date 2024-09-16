var manzanas=[];
var cont=0;
var acumulador=0;
do{
    var manzana=parseFloat(prompt("ingrese la cantidad de manzanas"));
    manzanas.push(manzana);
    cont++
}while(cont<6);
var totalmanzanas=manzanas.reduce((acumulador,manzana)=>acumulador+manzana);
document.write(`monto total a pagar: ${totalmanzanas}`);