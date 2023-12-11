import { pintarTarjetasde4en4,pintarCheckbox, filtrarPorCheckbox, filtrarArregloFuturos} from "./modulos/funciones.js";

let urlsprint = "https://mindhub-xj03.onrender.com/api/amazing"
fetch(urlsprint)
.then(response => response.json())
.then(data =>  {
    

//  llamado carrusel principal
let carrusel = document.getElementById("carousel-principal");
let eventosFuturos = filtrarArregloFuturos(data.events, data.currentDate);


pintarTarjetasde4en4(eventosFuturos, carrusel);

// <<<<<<<<<<<<<<<<funcion filtrar arregrlo fututos<<<<<<<<<<<<<<<<<<<<<<<


// <<<<<<<<<<<<<<<checkbox>>>>>>>>>>

let contenedorCheckbox = document.getElementById("contenedorCheckbox");
let nuevoArrayCategory = Array.from(
  new Set(data.events.map((evento) => evento.category))
);
pintarCheckbox(nuevoArrayCategory, contenedorCheckbox);
contenedorCheckbox.addEventListener("change", (e) => {
  let inputCheckeados = Array.from(
    document.querySelectorAll("input[type=checkbox]:checked")
  ).map((inputs) => inputs.value.toLowerCase());
  let nuevoArregloCheckbox = filtrarPorCheckbox(data.events, inputCheckeados);
 
  pintarTarjetasde4en4(nuevoArregloCheckbox, carrusel);
});

function pintarCheckbox(arregloCategory, divPrincipalCheckbox) {
  for (let j = 0; j < arregloCategory.length; j++) {
    if (arregloCategory[j] != undefined) {
      let checkbox = document.createElement("div");
      checkbox.classList.add("form-check", "form-check-inline");
      checkbox.innerHTML = `      
    <input class="form-check-input" type="checkbox" id="inlineCheckbox1 ${arregloCategory[j]}" value="${arregloCategory[j]}" />
    <label class="form-check-label" for="${arregloCategory[j]}">${arregloCategory[j]}</label>
    
    `;
      divPrincipalCheckbox.appendChild(checkbox);
    }
  }
}
function filtrarPorCheckbox(arreglo, arreglochekeados) {
  let arregloFinal = arreglo.filter((events) =>
    arreglochekeados.includes(events.category.toLowerCase())
  );
  if (arregloFinal.length == 0) {
    arregloFinal = arreglo;
  }
  return arregloFinal;
}

// <<<<<<<<<<<<<<<<<< search <<<<<<<<<<

let buscarPalabra = document.getElementById("inputBusqueda");
buscarPalabra.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  let arregloIngresado = filtroEventoPalabra(data.events, e.target.value);
  pintarTarjetasde4en4(arregloIngresado, carrusel);
});

function filtroEventoPalabra(arregloEvents, palabraClave) {
  let arregloFiltrado = arregloEvents.filter(
    (eventos) =>
      eventos.name.toLowerCase().includes(palabraClave.toLowerCase()) ||
      eventos.description.toLowerCase().includes(palabraClave.toLowerCase())
  );
  return arregloFiltrado;
}
filtroEventoPalabra(data.events, "Con");
})