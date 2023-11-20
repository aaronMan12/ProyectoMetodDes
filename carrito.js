


const url = 'http://localhost:80'

axios.get(url +'/listaProductos')
.then(function (respuesta) {
        
        var productos = respuesta.data;
        var listaDeProductos = document.getElementById('product-list');
        
        productos.forEach(function(producto) {
        
            var elementoProducto = document.createElement('div');
            elementoProducto.className ='item';
            
            var elementoProductoInfo = document.createElement('div');
            elementoProductoInfo.className ='info-producto';
            elementoProducto.appendChild(elementoProductoInfo);
    
            var nombreDelProducto = document.createElement('h2');
            nombreDelProducto.textContent = producto.nombre;
            elementoProductoInfo.appendChild(nombreDelProducto);
    
            var precioDelProducto = document.createElement('p');
            precioDelProducto.className='price'
            precioDelProducto.textContent = 'Precio: $' + producto.precio;
            elementoProductoInfo.appendChild(precioDelProducto);
    
            var botonAgregarAlCarrito = document.createElement('button');
            botonAgregarAlCarrito.textContent = 'Añadir al carro';
            botonAgregarAlCarrito.className ='btnadd';
            botonAgregarAlCarrito.addEventListener('click', function() {
            agregarAlCarrito(producto.idProducto);
        });
        elementoProducto.appendChild(botonAgregarAlCarrito);

        listaDeProductos.appendChild(elementoProducto);
    });
})
.catch(function (error) {
    console.log(error);
});

function agregarAlCarrito(idDelProducto) {
console.log('Agregar al carrito: ' + idDelProducto);
 axios.post(url + `/carrito/agregar/${idDelProducto}`)
 .then(response => {
     console.log(response.data);
     updateCart();
 })
 .catch(error => {
     console.error(error);
 });
}

function eliminarDelCarrito(id) {
    console.log('Eliminar del carrito: ' + id);
    axios.delete(url + '/borrar-producto-carrito/' + id)
    .then( function (response) {
        alert(response.data)
        location.reload();
    }).catch(function (error) {
        console.log(error)
    });
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
    
                var celdaId = fila.insertCell();
                celdaId.textContent = producto.idCarrito;
    
                var celdaNombre = fila.insertCell();
                celdaNombre.textContent = producto.nombre;
    
                var celdaPrecio = fila.insertCell();
                celdaPrecio.textContent = producto.precio;
    
                var celdaCantidad = fila.insertCell();
                celdaCantidad.textContent = 1;
                celdaCantidad.contentEditable = 'true'; 
                

                var celdaTotal = fila.insertCell();
                celdaTotal.textContent = producto.precio * 1 ;
    
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
