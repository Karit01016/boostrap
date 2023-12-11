let urlsprint = "https://mindhub-xj03.onrender.com/api/amazing";
fetch(urlsprint)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    let urlstring = window.location.href;

    let urlArmada = new URL(urlstring);

    let parametros = new URLSearchParams(urlArmada.search);

    let id = parametros.get("id");
    console.log(id);
    let data2 = data.events.filter((evento) => evento._id == id);
    console.log(data2);
    document.getElementById("imagencarusel1").src = data2[0].image;
    document.getElementById("tituloCard").innerHTML = data2[0].name;
    document.getElementById("description").innerHTML = data2[0].description;
    document.getElementById("date").innerHTML = data2[0].date;
    document.getElementById("category").innerHTML = data2[0].category;
    document.getElementById("place").innerHTML = data2[0].place;
    document.getElementById("capacity").innerHTML = data2[0].capacity;
    document.getElementById("assistance").innerHTML = data2[0].assistance;
    document.getElementById("price").innerHTML = "price" + data2[0].price;
  });
