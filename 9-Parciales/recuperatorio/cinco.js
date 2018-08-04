function Mostrar()
{
    var mes;

    mes = prompt("Ingrese un mes: ");

    mes = mes.toLowerCase();

    switch(mes)
    {
        case "enero": alert("Comienza el año");
        break;
        case  "diciembre": alert("Se acercan las fiestas");
        break;
        
        default: alert("Este mes no es ni Enero ni Diciembre");
    }

}
