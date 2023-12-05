


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
                celdaCantidad.contentEditable = 'false'; 
                

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

function realizarCheckout(){
    console.log('¡Muchas gracias por su compra!');
    var fechaHora = new Date().toLocaleString();
    var inicio =
    " Abarrotes EL COMPADRE: Los precios que son de la familia\n"+
    "\t\tRecibo de compra\n"+
    "Fecha y hora de impresion: "+fechaHora+"\n"+
    "Producto\t\t\tCantidad\tPrec. Unit.\n";
    var final =
    "\tFue un placer atenderle, vuelva pronto";
    descargaTicket(inicio, final);
}

function leerProductos(){
    
    
    
}

function descargaTicket(i, f){
    axios.get(url +'/carrito')
    .then(respuesta =>{
        var lista = "";
        var productoSolo = "";
        var total = 0;
        var productos = respuesta.data;
        productos.forEach(function(producto) {
            if(producto.nombre.length>=1&&producto.nombre.length<=7){
                productoSolo = producto.nombre+"\t\t\t\t    "+producto.cantidad+"\t\t    "+producto.precio+"\n";
            }
            if(producto.nombre.length>=8&&producto.nombre.length<=15){
                productoSolo = producto.nombre+"\t\t\t    "+producto.cantidad+"\t\t    "+producto.precio+"\n";
            }
            if(producto.nombre.length>=16&&producto.nombre.length<=23){
                productoSolo = producto.nombre+"\t\t    "+producto.cantidad+"\t\t    "+producto.precio+"\n";
            }
            if(producto.nombre.length>=24&&producto.nombre.length<=31){
                productoSolo = producto.nombre+"\t    "+producto.cantidad+"\t\t    "+producto.precio+"\n";
            }
            lista = lista + productoSolo;
        });
        productos.forEach(function(producto) {
            total = total + (producto.cantidad*producto.precio);
        });
        lista = lista + "\n\t\t\t\t\t    TOTAL: "+total+"\n";
        console.log('Se a descargado su recibo de compra');
        var mensaje = i+lista+f;
        var enlace = document.createElement("a");
        enlace.href = "data:text/plain;charset=utf-8," + encodeURIComponent(mensaje);
        enlace.download = "Recibo.txt";
        enlace.click();
    })
    
}