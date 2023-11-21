
const URL = 'http://localhost:80/'

const accion_boton_actualizar
    = document.getElementById("botonActualizar")


    function modificarProducto(_idProducto,_nombre,_precio,_foto){
        console.log(_idProducto,_nombre,_precio,_foto)
         axios.put(URL+'actualizarProducto/'+_idProducto,
             {
             "nombre": _nombre,
             "precio": _precio,
             "fotografia": _foto
             }).then(function (response) {
             alert(response.data)
             location.reload();
     
         })
             .catch(function (error) {
                 console.log(error)
             });
     
     
          const accion_boton_elimiar
         = document.getElementById('eliminar-producto')
     
            }
            
accion_boton_actualizar.addEventListener('click',
function (evt) {
evt.preventDefault();
const  idProducto =document.getElementById("acid").value
const nombre = document.getElementById("acnombre").value
const precio = document.getElementById("acprecio").value
const fotografia = document.getElementById("acfotografia").value

modificarProducto(idProducto,nombre,precio,fotografia)
});     