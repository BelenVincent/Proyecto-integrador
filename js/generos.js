fetch (' https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/')
.then (function(respuesta){
    return respuesta.json();
})

.then (function(datos){
    console.log (datos)
    let generos = datos.data;

    let generosContenedor = document.querySelector ('#products_generos')
    generos.forEach (function(dataGeneros){
        generosContenedor.innerHTML += ` <div class="generoscontenedor">
        <a href="detallesGeneros.html?id=${dataGeneros.id}">
        <div class="product" >
        <img class="img" src="${dataGeneros.picture_medium}" alt="clásica">
    </div>
     <h4 class="color">${dataGeneros.name}  </h4>
</div>`

    })
   })
 


 .catch(function(error){
    console.error(error);
})