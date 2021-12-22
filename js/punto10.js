// Se ingresan tres números, si todos los valores son menores a 10,
// imprimir en pantalla la leyenda "Todos los números son menores a diez".

const num1 = Number(prompt("ingrese un numero"));
const num2 = Number(prompt("ingrese un numero"));
const num3 = Number(prompt("ingrese un numero"));

if (num1 && num2 < 10 && num3 < 10) {
  alert("Todos los numeros son menores a diez");
} else {
  alert("Ningun o no todos los numeros son menor a diez");
}
