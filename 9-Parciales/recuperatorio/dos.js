function Mostrar()
{
    var importe;
    var descuento;
    var importeFinal;

    

    importe = parseInt(prompt("Ingrese un importe: "));

    descuento = importe * 0.25;

    importeFinal = importe - descuento;

    document.getElementById("importeFinal").value = importeFinal;

}
