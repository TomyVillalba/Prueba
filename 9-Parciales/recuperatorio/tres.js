function Mostrar()
{
    var precio1;
    var precio2;
    var precio3;
    var promedio;
    var resultado;

    precio1 = parseInt(document.getElementById("precioUno")).value;
    precio2 = parseInt(document.getElementById("precioDos")).value;
    precio3 = parseInt(document.getElementById("precioTres")).value;

    resultado = precio1 + precio2 + precio3;

    promedio = resultado/3;

    alert("La suma de los precios es " + resultado + " y el promedio es " + promedio);

    

    



}






