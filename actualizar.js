const URL = 'http://localhost:80/'

const accion_boton_actualizar
    = document.getElementById("botonActualizar")


    function modificarProducto(_idProducto,_nombre,_precio,categoria){
            axios.put(URL+'actualizarProducto/'+_idProducto,
             {
             "nombre": _nombre,
             "precio": _precio,
             "categoria":categoria
             }).then(function (response) {
                console.log('producto actualizado')
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
var fotografia = document.querySelector('#acfotografia').files[0];
const categoria = document.getElementById('categoria').value;

var reader = new FileReader();
reader.onload = function(event) {
    var fileData = event.target.result;
    if (!isNaN(idProducto) && !isNaN(precio)) {
        modificarProducto(idProducto,nombre,precio,categoria)
         subirFotografia(idProducto,fileData)
         
     }if (isNaN(precio)) {
         alert("ERROR PRECIO TIENE QUE SER NUMERO")
         
     } if(isNaN(idProducto)) {
         alert("ERROR ID TIENE QUE SER NUMERO")   
     }
     
};
reader.readAsArrayBuffer(fotografia);
});     


var datosProducto = new URLSearchParams(window.location.search);
    var id = datosProducto.get("id");
    var nombre = datosProducto.get("nombre");
    var precio = datosProducto.get("precio");
    var foto = datosProducto.get("foto");
    llenarformulario(id,nombre,precio,foto);
    


function llenarformulario(id, nombre, precio,fotografia) {
    document.getElementById('acid').value = id;
    document.getElementById('acnombre').value = nombre;
    document.getElementById('acprecio').value = precio;
    document.getElementById('acfotografia').value = fotografia;
}

function subirFotografia(idProducto,fileData){
  
 
     axios.put(URL+'registrarFoto/'+idProducto, fileData, {
        headers: {
            'Content-Type': 'image/jpeg'
        }
    })
     .then(function (response) {
         console.log(response);
         console.log('producto foto actualizado')
     })
     .catch(function (error) {
         console.log(error);
     });
}