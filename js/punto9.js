//Se ingresan tres valores por teclado, si todos
// son iguales se imprime la suma del primero con el segundo y a este
// resultado se lo multiplica por el tercero.

const num1 = Number(prompt("ingrese un numero"));
const num2 = Number(prompt("ingrese un numero"));
const num3 = Number(prompt("ingrese un numero"));

if (num1 && num2 === num3) {
  alert(`Resultado: ${(num1 + num2) * num3}`);
} else {
  alert(`Los numeros no son iguales entre si`);
}
