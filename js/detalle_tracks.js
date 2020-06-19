//obtengo el query string
let queryString = window.location.search

//paso de ese texto a un objeto
let objetoQuery = new URLSearchParams(queryString);

//ahora si obtengo el id del track
let trackId = objetoQuery.get('id');

fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/'+trackId)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(datos){

       console.log (datos)

    let playlist=[datos]



        let titulo = document.querySelector('.titulo-track');
        titulo.innerHTML = datos.title;

        let imagen = document.querySelector('.imagen-track');
        imagen.src = datos.album.cover_medium;


        let duracionCancion = document.querySelector('.duracion')
        duracionCancion.innerHTML= datos.duration;

        let nombreAlbum = document.querySelector ('.nombre-album');
        nombreAlbum.innerHTML = `<a href="detalleAlbum.html?id=${datos.album.id}"><h3>${datos.album.title}</h3></a>`
       let nombreArtista = document.querySelector ('.nombre-artista');
       nombreArtista.innerHTML = `<a href="detallesArtista.html?id=${datos.artist.id}"><h3>${datos.artist.name}</h3></a>`
   
    
      let boton = document.querySelector ('#me-gusta');

      boton.onclick = function (){
       //me traigo las canciones de localStorage
       if (window.localStorage.getItem("playlist")===null) {
           window.localStorage.setItem("playlist",JSON.stringify(datos))
       } else { 
          
        let arrayplaylist = JSON.parse(window.localStorage.getItem("playlist"))
        arrayplaylist.push(datos);
        window.localStorage.setItem("playlist",JSON.stringify(arrayplaylist))
        console.log(arrayplaylist)
           
       }
      
       
      
       
      }



    })
    .catch(function(error){
        console.error(error);
    })

    