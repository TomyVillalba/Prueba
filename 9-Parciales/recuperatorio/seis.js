function Mostrar()
{
    var peso;
    var flag=true;
    var max;
    var min;
    var i = 0;
     
    while(i < 5)
    {

        peso = parseFloat(prompt("Ingrese un pedo en kilos").value); 
       
        while(peso <= 0 && isNaN(peso))
        {

            peso = parseFloat(prompt("Error, reingrese un pedo en kilos").value);
       
        }

        if(flag)
        {
            flag = false;
            max = peso;
            min = peso;
        }
        if(peso > max)
        {
            max = peso;
    
        }
        else if(peso < min)
        {
            min = peso;

        }
        



        i++;
    } 

    document.write("El peso maximo es: " + max + "<br>");
    document.write("El peso minimo es: " + min + "<br>");

}
