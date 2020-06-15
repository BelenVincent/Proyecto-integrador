window.onload = function(){



//obtengo las canciones que quiero
let canciones = JSON.parse(window.localStorage.getItem('playlist'));
let cancionesArray = document.querySelector ('.cancionindividual')

for (const cancion of canciones) {
    console.log(cancion)
    cancionesArray.innerHTML
}

}




