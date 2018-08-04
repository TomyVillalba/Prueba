function Mostrar()
{
    var edad;
    var sexo;
    var i;
    var contador=0;
    var promedio;
    var suma;
    var cantVarones=0;

    for(i=0; i<100; i++)
    {
        edad = parseInt(prompt("Ingrese la edad: "));

        while(edad < 0 || edad > 100)
        {

            edad = parseInt(prompt("Error, reingrese la edad: "));
        
        }


        sexo = prompt("Ingrese el sexo: ");

        while(sexo != "f" && sexo != "m")
        {

            sexo = prompt("Ingrese un sexo valido: ");
        
        }


        suma = suma + edad;

        if(flag)
        {
            flag = false;
            max = edad;
            min = edad;
        }

        if(sexo == "m" && edad >= 20)
        {
            cantVarones++;
        }


    }

    promedio = suma / 100;

    alert("El promedio es " + promedio);
    alert("La cantidad maxima es " + max);
    alert("La cantidad minima es " + min);
    alert("La cantidad de varones mayores a 20 son " + cantVarones);
    


}
