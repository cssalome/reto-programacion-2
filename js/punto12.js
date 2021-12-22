// Escribir un programa que pida ingresar la coordenada de un punto en el plano,
// es decir dos valores enteros x e y (distintos a cero).
// Posteriormente imprimir en pantalla en que cuadrante se ubica dicho punto.
// (1º Cuadrante si x > 0 Y y > 0 , 2º Cuadrante: x < 0 Y y > 0, etc.)

const x = Number(prompt("Escriba el valor de x"));
const y = Number(prompt("Escriba el valor de y"));

if (x > 0 && y > 0) {
  alert("Pertenece al 1º Cuadrante");
} else if (x < 0 && y > 0) {
  alert("pertenece al 2º Cuadrante");
}
