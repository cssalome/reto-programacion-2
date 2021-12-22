// Se ingresan tres números, si al menos uno de los valores ingresados es menor a 10,
// imprimir en pantalla la leyenda "Alguno de los números es menor a diez".

const num1 = Number(prompt("ingrese un numero"));
const num2 = Number(prompt("ingrese un numero"));
const num3 = Number(prompt("ingrese un numero"));

if (num1 || num2 < 10 || num3 < 10) {
  alert("Alguno de los números es menor a diez");
} else {
  ("Ninguno de los numeros es diez");
}
