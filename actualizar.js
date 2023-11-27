const URL = 'http://localhost:80/'

var datosProducto = new URLSearchParams(window.location.search);
    const idProducto =  datosProducto.get("id");
    var nombre = datosProducto.get("nombre");
    var precio = datosProducto.get("precio");
    var foto = datosProducto.get("foto");
    var categoria = datosProducto.get("categoria");
    llenarformulario(nombre,precio,foto,categoria);
    


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
const nombre = document.getElementById("acnombre").value
const precio = document.getElementById("acprecio").value
var fotografia = document.querySelector('#acfotografia').files[0];
const categoria = document.getElementById('categoria').value;


    if (fotografia == null) {
      
        console.log("foto no obtenida")
        modificarProducto(idProducto,nombre,precio,categoria)
      
    }else{
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
    }
    

});     



function llenarformulario( nombre, precio,categoria) {
    document.getElementById('acnombre').value = nombre;
    document.getElementById('acprecio').value = precio;
    document.getElementById('categoria').value = categoria
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