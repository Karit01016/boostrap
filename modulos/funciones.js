//--------------------------- funcion pintar tarjetas--------------------------------------------------------------
export function pintarTarjetasde4en4(arregloEvents, divPrincipal) {
  divPrincipal.innerHTML = " ";
  if (arregloEvents.length == 0) {
    divPrincipal.innerHTML = `<div class="hola"><p class="textoTarjetaNoEncontrada" > "No events found,  try again! </p> </div>
      `;
  }
  for (let i = 0; i < arregloEvents.length; i += 4) {
    let carruselItem;
    if (i < 4) {
      carruselItem = document.createElement("div");
      carruselItem.classList.add("carousel-item", "active");
    } else {
      carruselItem = document.createElement("div");
      carruselItem.classList.add("carousel-item");
    }

    let contenedor = document.createElement("div");
    contenedor.classList.add("d-flex", "justify-content-around");

    for (let j = i; j < i + 4; j++) {
      if (arregloEvents[j] != undefined) {
        let card = document.createElement("div");
        card.classList.add("card", "tamañoCard");
        card.innerHTML = `  
      <img id="imagenCard" src="${arregloEvents[j].image}" class="card-img-top" alt="...">
      <div class="card-body bg-danger d-flex flex-column mb-3h-50">
        <h5 id"tituloCards" class="card-title text-center ">${arregloEvents[j].name}</h5>
        <p id"descripcionCards" class="card-text  p-2">${arregloEvents[j].description}</p>
     
        <ul class ="p-2"       
          <li class="d-flex align-items-start flex-column mb-3 ">Category:${arregloEvents[j].category}</li>
          
        </ul>
        </div>
        <div class="seccionPrecioDetails  bg-danger    p-2 d-flex justify-content-between  "
        <li id="precioCards" class="list-group-item ">Price:${arregloEvents[j].price}</li>
          <a href="./details.html?id=${arregloEvents[j]._id}" class="btn btn-primary ">Details</a>
          </div>
        `;
        contenedor.appendChild(card);
      }
    }
    carruselItem.appendChild(contenedor);
    divPrincipal.appendChild(carruselItem);
  }
}

//  <<<<<<<<<<<<<<<<<<<<<<<<funcion filtro por palabra clave<<<<<<<<<<<<<<<
export function filtroEventoPalabra(arregloEvents, palabraClave) {
  let arregloFiltrado = arregloEvents.filter(
    (eventos) =>
      eventos.name.toLowerCase().includes(palabraClave.toLowerCase()) ||
      eventos.description.toLowerCase().includes(palabraClave.toLowerCase())
  );
  return arregloFiltrado;
}

// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<funcion pintar checbox>>>>>>>>>>>>>>>>>

export function pintarCheckbox(arregloCategory, divPrincipalCheckbox) {
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

export function filtrarPorCheckbox(arreglo, arreglochekeados) {
  let arregloFinal = arreglo.filter((events) =>
    arreglochekeados.includes(events.category.toLowerCase())
  );
  if (arregloFinal.length == 0) {
    arregloFinal = arreglo;
  }
  return arregloFinal;
}
// <<<<<<<<<<<<<<<<<<filtro de arreglos eventos futuros<<<<<<<<<<<zzzzzzzzzzzz
export function filtrarArregloFuturos(arreglo, fecha) {
  let nuevoArreglo = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].date > fecha) {
      nuevoArreglo.push(arreglo[i]);
    }
  }
  return nuevoArreglo;
}
