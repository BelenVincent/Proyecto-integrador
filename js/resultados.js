//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del album
let resultado = objetoQuery.get('busqueda');

fetch ('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' + resultado)
.then(function(respuesta){
    return respuesta.json();
})

.then(function(data){
    let contenedorData = document.querySelector (".seccion-canciones");
    let tracks = data.data;
    console.log (tracks);

    for (const track of tracks) {
         
        contenedorData.innerHTML += `
        <div>
        <div class="resultados">
            <a href="detalle_tracks.html?id=${track.id}">
            <img src="${track.album.cover_medium} " alt="">
           </a>
           <a href="detalle_tracks.html?id=${track.id}">${track.title_short} </a>
           <a href="detallesArtista.html?id=${track.artist.id}">${track.artist.name} </a>
        </div>
   </div>
        
        `
    }


})

.catch(function(error){
    console.error(error);
})