// De un operario se conoce su sueldo y los años de antigüedad.
// Se pide confeccionar un programa que lea los datos de entrada e informe:
// a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años,
// otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
// b)Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años,
// otorgarle un aumento de 5 %.
// c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en pantalla sin cambios.

const sueldo = Number(prompt("Ingrese la cantidad de su suledo actual"));
const antig = Number(prompt("ingrese los años de antiguedad"));

if (sueldo < 500 && antig >= 10) {
  alert(`Nuevo sueldo: ${(20 * sueldo) / 100 + sueldo}`);
} else if (sueldo < 500 && antig < 10) {
  alert(`Nuevo sueldo: ${(5 * sueldo) / 100 + sueldo}`);
} else if (sueldo >= 500) {
  alert(`Sueldo sin cambios: ${sueldo}`);
}
