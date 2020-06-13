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
        titulo.innerHTML = `<h5 class="numeros"> ${datos.name} </h5>`

        let imagen = document.querySelector('.imagen-artista');
        imagen.src =  datos.picture_medium;

        let fans = document.querySelector('.fans')
        fans.innerHTML = `<h5 class="numero">Número de fans:</h5>
        <h4 class="fans"> ${datos.nb_fan} </h4>`
       
        
    })
    .catch(function(error){
        console.error(error);
    })
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'+artistaId+'/top')
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

       console.log (datos)
    let contenedorcanciones=document.querySelector('.contenedor-canciones');

    let data=datos.data
    for (const cancion of data) {
        contenedorcanciones.innerHTML+=`
        
        
        <div class="topCanciones">
           <a href="detalle_tracks.html?id=${cancion.id}">${cancion.title} </a>
        </div>
    
         `
        
      


    }
    })
    .catch(function(error){
        console.error(error);
    })