const URL = 'http://localhost:80/'
const accion_boton_elimiar
= document.getElementById('eliminar-producto')

llenarTabla(); 

/*----------------------------------------accione nes para el boton eliminar------------------------------*/
accion_boton_elimiar.addEventListener('click',
function (evt){
    console.log("entro event")
evt.preventDefault();
const idProducto = document.getElementById("id").value;
    eliminarProducto(idProducto);
});

function eliminarProducto(_idProducto) {
axios.delete(URL + "borrarProducto/" + _idProducto)
.then( function (response) {
    alert(response.data)
    location.reload();
}).catch(function (error) {
    console.log(error)
});
}

/*------------------------------------------------------------------------------------------------------------*/

/*----------------------------------------accione nes para llenar la tabla------------------------------*/
function llenarTabla() {
    axios.get(URL +'/listaProductos')
        .then(respuesta => { 
            var productos = respuesta.data;
            var tablaDelCarrito = document.getElementById('tabla-del-admin');
    
            // Limpiar la tabla
        
    
            // Añadir cada producto a la tabla
            productos.forEach(function(producto) {
                var fila = tablaDelCarrito.insertRow();
    
            
                var celdaId = fila.insertCell();
                celdaId.textContent = producto.idProducto;

                var celdaNombre = fila.insertCell();
                celdaNombre.textContent = producto.nombre;
    
                var celdaPrecio = fila.insertCell();
                celdaPrecio.textContent = '$'+producto.precio;


                var celdaAcciones = fila.insertCell();

                var botonActualizar = document.createElement('button');
                botonActualizar.textContent = 'Actualizar';
                botonActualizar.addEventListener('click', function() {   
                    var datosProducto = new URLSearchParams();
                    datosProducto.append("id",producto.idProducto);
                    datosProducto.append("nombre",producto.nombre);
                    datosProducto.append("precio",producto.precio);
                    datosProducto.append("foto", producto.fotografia);
                    location.href ='http://127.0.0.1:5501/Actualizar.html?'+ datosProducto.toString();    
             
                });
                celdaAcciones.appendChild(botonActualizar);

                var botonEliminar = document.createElement('button');
                botonEliminar.textContent = 'Eliminar';
                botonEliminar.addEventListener('click', function() {
                    eliminarProducto(producto.idProducto);
                });
                celdaAcciones.appendChild(botonEliminar);


              
            });
            
        })
        .catch(error => {
            console.error(error);
        });
}
