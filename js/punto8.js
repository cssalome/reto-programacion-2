// Realizar un programa que pida cargar una fecha cualquiera,
// luego verificar si dicha fecha corresponde a Navidad.

const año = Number(prompt("ingresa un año"));
const mes = Number(prompt("ingresa un mes"));
const dia = Number(prompt("ingresa un dia"));

if (mes === 12 && dia === 25) {
  alert("¡¡Ya es de navidad!!  :D");
} else {
  alert("Aun falta para que llegue navidad  :(");
}
