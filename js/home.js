fetch (' https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0')
.then (function(respuesta){
  return respuesta.json();
})
.then (function(datos){
    //trabajo con los datos
    let albums = datos.albums.data;
    let artistas = datos.artists.data;
    let canciones = datos.tracks.data;
    
    let albumsContenedor = document.querySelector ('#albums');
   albums.forEach (function(dataAlbum){
        albumsContenedor.innerHTML += ` <div class="playlists">
        <a href="detalleAlbum.html?id=${dataAlbum.id} ">
        <img class="img" src="${dataAlbum.cover} " alt="nibiru">
        <h4>${dataAlbum.title} </h4>
        </a>
        </div>
        `
    })

    let artistasContenedor = document.querySelector ('#artistas');
    artistas.forEach (function(dataArtist){
        artistasContenedor.innerHTML += `  <div class="product">
        <img class="img" src="${dataArtist.picture_medium} " alt="Drake">
        <h4>${dataArtist.name} </h4>
        <a href="detalleAlbum.html"></a>
        </div>
        `
    })

    let cancionesContenedor = document.querySelector ('#tracks');
    canciones.forEach(function(dataCancion){
        cancionesContenedor.innerHTML += `<div >
        <h4>${dataCancion.title} </h4>
        <audio src="${dataCancion.preview} " controls></audio>
    </div>`
    });
   

})

.catch(function(error){
      console.error(error);
})