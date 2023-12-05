//--------------------------- funcion pintar tarjetas--------------------------------------------------------------
export function pintarTarjetasde4en4(arregloEvents, divPrincipal) {
  divPrincipal.innerHTML = " ";
  if (arregloEvents.length == 0) {
    divPrincipal.innerHTML = `<p class="textoTarjetaNoEncontrada" > "No events found,  try again! </p>
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
      <img src="${arregloEvents[j].image}" class="card-img-top" alt="...">
      <div class="card-body bg-danger d-flex flex-column mb-3h-50">
        <h5 class="card-title text-center ">${arregloEvents[j].name}</h5>
        <p class="card-text  p-2">${arregloEvents[j].description}</p>
     
        <ul class ="p-2"       
          <li class="d-flex align-items-start flex-column mb-3 ">Category:${arregloEvents[j].category}</li>
          
        </ul>
        </div>
        <div class="seccionPrecioDetails  bg-danger    p-2 d-flex justify-content-between  "
        <li class="list-group-item ">Price:${arregloEvents[j].price}</li>
          <a href="#" class="btn btn-primary ">Details</a>
          </div>
        `;
        contenedor.appendChild(card);
      }
    }
    carruselItem.appendChild(contenedor);
    divPrincipal.appendChild(carruselItem);
  }
}
