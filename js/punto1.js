// Realizar un programa que lea por teclado dos números,
// si el primero es mayor al segundo informar su suma y diferencia,
// en caso contrario informar el producto y
// la división del primero respecto al segundo.

const num1 = Number(prompt("Imgrese un numero", ""));
const num2 = Number(prompt("Imgrese otro numero", ""));
const suma = num1 + num2;
const diferencia = num1 - num2;

if (num1 > num2) {
  alert(`Su suma es:${suma}. Y su diferrencia es de: ${diferencia}`);
} else {
}
