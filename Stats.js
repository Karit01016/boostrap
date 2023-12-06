console.log("hi karen");
let urlsprint = "https://mindhub-xj03.onrender.com/api/amazing"
fetch(urlsprint)
.then(response => response.json())
.then(data =>  {
    console.log(data.events);
})
