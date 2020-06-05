//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del track
let trackId = objetoQuery.get('id');

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/3135556')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

       console.log (datos)

        let titulo = document.querySelector('.titulo-track');
        titulo.innerHTML = datos.title;

        let imagen = document.querySelector('.imagen-track');
        imagen.src = datos.cover_medium;



    })
    .catch(function(error){
        console.error(error);
    })