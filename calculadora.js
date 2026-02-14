let opcion=prompt("Ingrese la operacion que quiere realizar\n1. Suma\n2. Restar\n3. Multiplicar\n4. Dividir");
let num1=prompt("Ingrese el primer numero");
let num2=prompt("Ingrese el segundo numero");
if (opcion == "1"){
    document.writeln("Resultado de la suma: ", num1+num2);
} else if(opcion == "2"){
    document.writeln("Resultado de la resta: ", num1-num2);
} else if(opcion == "3"){
    document.writeln("Resultado de la Multiplicacion: ", num1*num2);
} else if(opcion == "4"){
    document.writeln("Resultado de la Division: ", num1/num2);
}