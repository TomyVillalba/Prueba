function Mostrar()
{
    var resuesta = si;
    var contador = 0;
    var contLibrosPagPares = 0;
    var contLibrosPagImpares = 0;
    var acumPagsProgram = 0;
    var contVentasCero = 0;
    var acumVentas = 0;
    var promedioVentas = 0;
    var nombre;
    var paginas;
    var ventas;
    var tema;

    while(respuesta != "no")
    {
        contador++;
        nombre = prompt("Ingrese el nombre del libro: ");
        tema = prompt("Ingrese el tema (robotica, progrmacion, patrones, base de datos: ");
        paginas = parseInt(prompt("Ingrese el numero de paginas: "));
        ventas = parseInt(prompt("Ingrese las ventas: "));

        while(tema != "programacion" && tema != "robotica" && tema != "patrones" && tema != "base de datos")
        {
            tema = prompt("Ingrese un tema valido (robotica, progrmacion, patrones, base de datos: ");
        }
        respuesta = prompt("Desea ingresar mas lbros?: ");

        if(paginas % 2 == 0)
        {
            contLibrosPagPares++;
        }
        else
        {
            contLibrosPagImpares++;
        }

        if(ventas == 0)
        {
            contVentasCero++;
        }

        acumVentas + ventas;

        if(tema == "programacion")
        {
            acumPagsProgram++;
        }

        promedioVentas = acumVentas / contador;

        document.write("Cantidad de libros con paginas pares: " + "<br>");
        document.write("Cantidad de libros con paginas impares: " + "<br>");
        document.write("Cantidad de ventas ceros: " + cantVentasCero + "<br>");
        document.write("Promedio de ventas: " + promedioVentas + "<br>");
        document.write("Cantdad de libros de programacion: " + acumPagsProgram + "<br>");
        

    }

    


}
