//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del artista
let artistaId = objetoQuery.get('id');

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+artistaId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

       console.log (datos)

        let titulo = document.querySelector('.nombre-artista');
        titulo.innerHTML = datos.name;

        let imagen = document.querySelector('.imagen-artista');
        imagen.src = datos.picture_medium;

        let fans = document.querySelector('.fans')
        fans.innerHTML = datos.nb_fan
        
    })
    .catch(function(error){
        console.error(error);
    })