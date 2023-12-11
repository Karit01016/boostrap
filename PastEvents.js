import { pintarTarjetasde4en4, filtrarPorCheckbox   } from "./modulos/funciones.js";

let urlsprint = "https://mindhub-xj03.onrender.com/api/amazing"
fetch(urlsprint)
.then(response => response.json())
.then(data =>  {
    



pintarTarjetasde4en4(eventosPasados, carrusel);

let contenedorCheckbox = document.getElementById("contenedorCheckbox");
let nuevoArrayCategory = Array.from( new Set(data.events.map(evento  => evento.category)));

pintarCheckbox(nuevoArrayCategory,contenedorCheckbox);  
contenedorCheckbox.addEventListener("change",e =>{

  let inputCheckeados = Array.from(document.querySelectorAll("input[Type=checkbox]:checked")).map(inputs => inputs.value.toLowerCase())
let nuevoArregloCheckbox = filtrarPorCheckbox(data.events,inputCheckeados)

pintarTarjetasde4en4(nuevoArregloCheckbox,carrusel )
  
 
})


// -----------------------buscadordePalabra-------------
let buscarPalabra = document.getElementById("inputBusqueda");

buscarPalabra.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  let arregloIngresado = filtroEventoPalabra(data.events, e.target.value);
  pintarTarjetasde4en4(arregloIngresado, carrusel);
});


filtroEventoPalabra(data.events, " ");






})