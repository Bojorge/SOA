// Arrays de platos para cada categoría
var entradas = [
  { nombre: "Pizza", precio: "$10" },
  { nombre: "Ensalada César", precio: "$8" },
  { nombre: "Bruschetta", precio: "$6" }
];

var platosPrincipales = [
  { nombre: "Lasaña", precio: "$15" },
  { nombre: "Pechuga de Pollo a la Parrilla", precio: "$12" },
  { nombre: "Risotto de Champiñones", precio: "$14" }
];

var postres = [
  { nombre: "Tiramisú", precio: "$7" },
  { nombre: "Helado de Vainilla", precio: "$5" },
  { nombre: "Pastel de Chocolate", precio: "$8" }
];

// Función para generar la lista de platos
function generarListaPlatos(platos, contenedorId) {
  var ul = document.getElementById(contenedorId);
  platos.forEach(function(plato) {
    var li = document.createElement("li");
    li.textContent = plato.nombre + " - " + plato.precio;
    ul.appendChild(li);
  });
}

// Llamar a la función para generar las listas de platos
generarListaPlatos(entradas, "entradas");
generarListaPlatos(platosPrincipales, "platos_principales");
generarListaPlatos(postres, "postres");

function recomendarPlato() {
  var platos = [
    "Pizza",
    "Lasaña",
    "Pechuga de Pollo a la Parrilla",
    "Tiramisú",
    "Bruschetta",
    "Risotto de Champiñones",
    "Helado de Vainilla",
    "Pastel de Chocolate"
  ];
  var randomIndex = Math.floor(Math.random() * platos.length);
  return platos[randomIndex];
}
  
// Mostrar la recomendación del chef
document.getElementById("recomendacion").innerText = "Recomendación del Chef: " + recomendarPlato();
  
// Manejar la reserva
document.getElementById("reservacion-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    
  var nombre = document.getElementById("nombre").value;
  var fecha = document.getElementById("fecha").value;
  var hora = document.getElementById("hora").value;
    
  // Aquí podrías enviar la información de la reserva a través de AJAX o cualquier otro método
    
  alert("¡Gracias por tu reserva, " + nombre + "! Hemos reservado una mesa para el " + fecha + " a las " + hora + ".");
});