import {
  filtrarPorCheckbox,
  filtrarArregloFuturos,
} from "./modulos/funciones.js";

console.log("hi karen");

let urlsprint = "https://mindhub-xj03.onrender.com/api/amazing";
fetch(urlsprint)
  .then((response) => response.json())
  .then((data) => {
    let divPrincipalTabla = document.getElementById("cuerpoTabla");

    let dataAsistencia = data.events.filter((events) => events.assistance);
    console.log(dataAsistencia);
    console.log(data);

    let porcentajesMayores = [];
    let porcentajesMenores = [];

    for (let i = 0; i < dataAsistencia.length; i++) {
      let porcentajeAsistencia = (100 / 100) * dataAsistencia[i].capacity;

      let resultadoOperacion = Math.floor(
        Number((dataAsistencia[i].assistance / porcentajeAsistencia) * 100)
      );

      if (resultadoOperacion > 96) {
        porcentajesMayores.push({
          nombre: dataAsistencia[i].name,
          categoria: dataAsistencia[i].category,
          asistencia: resultadoOperacion,
          capacidad: dataAsistencia[i].capacity,
        });
      }
      if (resultadoOperacion < 96) {
        porcentajesMenores.push({
          nombre: dataAsistencia[i].name,
          categoria: dataAsistencia[i].category,
          asistencia: resultadoOperacion,
          capacidad: dataAsistencia[i].capacity,
        });
      }
    }

    for (let i = 0; i < porcentajesMenores.length; i++) {
      let x = i;

      let encabezadoPagina = document.createElement("Tr");
      if (x < porcentajesMayores.length) {
        for (let j = x; j < x + 1; j++) {
          encabezadoPagina.innerHTML = `<td>Event ${porcentajesMayores[j].nombre} tubo una asistencia de: ${porcentajesMayores[j].asistencia} </td>
      <td>Event ${porcentajesMenores[j].nombre} tubo una asistencia de: ${porcentajesMenores[j].asistencia} </td>
      <td>${porcentajesMenores[j].capacidad}</td>`;

          divPrincipalTabla.appendChild(encabezadoPagina);
        }
      }

      if (x > porcentajesMayores.length) {
        for (let j = x; j < x + 1; j++) {
          encabezadoPagina.innerHTML = `<td> </td>
            <td>Event ${porcentajesMenores[j].nombre} Had an assistance of: ${porcentajesMenores[j].asistencia} </td>
            <td>${porcentajesMenores[j].capacidad}</td>`;
          divPrincipalTabla.appendChild(encabezadoPagina);
        }
      }
    }

    //   // <<<<<<<<<<<>>>>>>> tabla2<<<<<<<<<<<<<<<>>>>>>>>>>>>>

    console.log("tabla 2");

    // Ingresos y porcentaje de asistencia estimada por categoría (próximos eventos)

    let contenedorTabla2 = document.createElement("Tr");
    contenedorTabla2.innerHTML = `<th class="bg-secondary" colspan="3">Upcoming events statistics by category</th>`;

    divPrincipalTabla.appendChild(contenedorTabla2);

    console.log(contenedorTabla2);

    let eventosFuturos = filtrarArregloFuturos(
      data.events,
      data.currentDate,
      true
    );
    console.log(eventosFuturos);
    let ingresosFuturosEventos = [];
    let categoriasEventosFuturos = [];

    for (let i = 0; i < eventosFuturos.length; i++) {
      categoriasEventosFuturos.push({
        nombre: eventosFuturos[i].name,
        categorias: eventosFuturos[i].category,
      });

      ingresosFuturosEventos.push({
        nombre: eventosFuturos[i].name,
        ingresos: eventosFuturos[i].price * eventosFuturos[i].capacity,
      });
    }

    for (let i = 0; i < categoriasEventosFuturos.length; i++) {
      let nuevoTitulo = document.createElement("tr");
      nuevoTitulo.innerHTML = `

   <td  class="col-4">${categoriasEventosFuturos[i].categorias}</b></td>
   <td  class="col-4"> estimated income: ${ingresosFuturosEventos[i].ingresos}</td>
   <td  class="col-4">Percentage of assistance is  100% </td>
`;

      divPrincipalTabla.appendChild(nuevoTitulo);
    }

    let nuevoTrEventosPasados = document.createElement("Tr");
    nuevoTrEventosPasados.innerHTML = `<th colspan="3">Past Events statics by category</th>`;

    divPrincipalTabla.appendChild(nuevoTrEventosPasados);

    let eventosPasados = filtrarArregloFuturos(
      data.events,
      data.currentDate,
      false
    );

    let categoriaEventosPasados = [];
    let ingresosEventosPasados = [];
    let resultadoOperacionEventosPasados = [];

    for (let i = 0; i < eventosPasados.length; i++) {
      let diezPorciento = (100 / 100) * eventosPasados[i].capacity;
      let resultadoOperacion = Math.floor(
        Number((eventosPasados[i].assistance / diezPorciento) * 100)
      );

      resultadoOperacionEventosPasados.push(resultadoOperacion);

      categoriaEventosPasados.push({
        nombre: eventosPasados[i].name,
        categorias: eventosPasados[i].category,
      });

      ingresosEventosPasados.push({
        nombre: eventosPasados[i].name,
        ingresos: eventosPasados[i].price * eventosPasados[i].assistance,
      });
    }

    for (let i = 0; i < categoriaEventosPasados.length; i++) {
      let nuevoTituloTr = document.createElement("tr");
        nuevoTituloTr.innerHTML =`
        <td>Categories are:  <b>${categoriaEventosPasados[i].categorias}</td>
        <td>Pevenues $ ${ingresosEventosPasados[i].ingresos}</td>
        <td>Percentage of assistance are ${resultadoOperacionEventosPasados[i]}%</td>`



       

      divPrincipalTabla.appendChild(nuevoTituloTr);
    }
  });
