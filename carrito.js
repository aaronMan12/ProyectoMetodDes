


const url = 'http://localhost:80'

updateCart();

function eliminarDelCarrito(id) {
    console.log('Eliminar del carrito: ' + id);
    axios.delete(url + '/borrar-producto-carrito/' + id)
    .then( function (response) {
        alert(response.data)
        location.reload();
    }).catch(function (error) {
        console.log(error)
    });
    updateCart();
}

function updateCart() {
    axios.get(url +'/carrito')
        .then(respuesta => { 
            var productos = respuesta.data;
            var tablaDelCarrito = document.getElementById('tabla-del-carrito');
    
            // Limpiar la tabla
            while (tablaDelCarrito.rows.length > 1) {
                tablaDelCarrito.deleteRow(1);
            }
    
            // Añadir cada producto a la tabla
            productos.forEach(function(producto) {
                var fila = tablaDelCarrito.insertRow();
    
            
    
                var celdaNombre = fila.insertCell();
                celdaNombre.textContent = producto.nombre;
    
                var celdaPrecio = fila.insertCell();
                celdaPrecio.textContent = '$'+producto.precio;
    
                var celdaCantidad = fila.insertCell();
                celdaCantidad.textContent = producto.cantidad;
                celdaCantidad.contentEditable = 'true'; 
                

                var celdaTotal = fila.insertCell();
                celdaTotal.textContent = '$'+producto.precio * producto.cantidad ;
    
                celdaCantidad.oninput = function() {
                    var cantidad = Number(celdaCantidad.textContent);
                    var precio = Number(celdaPrecio.textContent);
                
                    var total = cantidad * precio;
                    celdaTotal.textContent = total.toFixed(2);
                }


                var celdaAcciones = fila.insertCell();
                var botonEliminar = document.createElement('button');
                botonEliminar.textContent = 'Eliminar';
                botonEliminar.addEventListener('click', function() {
                    eliminarDelCarrito(producto.idProducto);
                });
                celdaAcciones.appendChild(botonEliminar);
            });
        })
        .catch(error => {
            console.error(error);
        });
}
