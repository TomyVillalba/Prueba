function Mostrar()
{
    var num1;
    var num2;
    var suma;


    num1 = parseInt(prompt("Ingrese un numero: "));
    num2 = parseInt(prompt("Ingrese un numero: "));

    suma = num1 + num2;


    if(suma > 0)
    {
        document.write("Es positivo");
    }
    else if(suma < 0)
    {
        document.write("Es negativo");
    }
    else
    {
        document.write("Es cero");
    }

}
