//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
let albumId = objetoQuery.get('id');

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/' + albumId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

       console.log (datos)

        let titulo = document.querySelector('.titulo-album');
        titulo.innerHTML = datos.title;

        let imagen = document.querySelector('.imagen-album');
        imagen.src = datos.cover_medium;

        let fecha = document.querySelector('.fecha')
       fecha.innerHTML= datos.release_date;

       let nombreArtista = document.querySelector('.nombre-artista');
       nombreArtista.innerHTML =  `<a href="detallesArtista.html?=${datos.artist.id}"><h3>${datos.artist.name}</h3></a>`



    })
    .catch(function(error){
        console.error(error);
    })