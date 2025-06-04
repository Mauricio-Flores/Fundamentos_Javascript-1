// Declaración de variables
var edad = 25; // Menos segura
let anioGraduacion = 2022; // Tipo numérico - INT
let temperatura = 36.6; // Numérico con parte decimal - FLOAT
let ciudad = "Santiago"; // string
let soyEstudiante = true; // Valor verdadero o falso - Boolean
let listaFrutas = ["Manzana", "Platano", "Uva", "Pera"]; // Lista de elementos - Array
let coche = { marca: "Toyota", modelo: "Corolla" }; // Diccionario - Object
let datoIndefinido; // Sin valor asignado - undefined
let sinValor = null; // Valor nulo - Null
const pais = "Chile"; // Constante - No varía

// Funciones para mostrar cada valor con alert
function mostrarAnioGraduacion() {
  alert("Año de graduación: " + anioGraduacion);
}

function mostrarTemperatura() {
  alert("Temperatura corporal: " + temperatura);
}

function mostrarCiudad() {
  alert("Ciudad actual: " + ciudad);
}

function mostrarsoyEstudiante() {
  alert("Soy estudiante?: " + esEstudiante);
}

function mostrarListaFrutas() {
  alert("Lista de frutas: " + listaFrutas);
}

function mostrarCoche() {
  alert("Coche: " + JSON.stringify(coche));
}

function mostrarDatoIndefinido() {
  alert("Dato indefinido: " + datoIndefinido);
}

function mostrarSinValor() {
  alert("Sin valor (nulo): " + sinValor);
}

function mostrarConstantePais() {
  alert("País: " + pais);
}
