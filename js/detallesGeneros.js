//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
let GenerosId = objetoQuery.get('id');

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + GenerosId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

       console.log (datos)

        let titulo = document.querySelector('.titulo-genero');
        titulo.innerHTML = datos.name;

        let imagen = document.querySelector('.imagen-genero');
        imagen.src = datos.picture_medium;



    })
    .catch(function(error){
        console.error(error);
    })