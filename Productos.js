const URL = 'http://localhost:80'

axios.get(URL+'/listaProductos')
.then(function (respuesta) {
        
        var productos = respuesta.data;
        var listaDeProductos = document.getElementById('product-list');
        
        productos.forEach(function(producto) {
        
            var elementoProducto = document.createElement('div');
            elementoProducto.className ='item';
    
            var imagenDelProducto = document.createElement('img');
            //imagenDelProducto.src = producto.fotografia;
            imagenDelProducto.src ='data:image/jpeg;base64,' + producto.fotografia
            elementoProducto.appendChild(imagenDelProducto);
            
            var elementoProductoInfo = document.createElement('div');
            elementoProducto.appendChild(elementoProductoInfo);
    
            var nombreDelProducto = document.createElement('h2');
            nombreDelProducto.textContent = producto.nombre;
            elementoProductoInfo.appendChild(nombreDelProducto);
    
            var precioDelProducto = document.createElement('p');
            precioDelProducto.className='price'
            precioDelProducto.textContent = 'Precio: $' + producto.precio;
            elementoProductoInfo.appendChild(precioDelProducto);
    
            var botonAgregarAlCarrito = document.createElement('button');
            botonAgregarAlCarrito.textContent = 'Actualizar';
            botonAgregarAlCarrito.className ='btnadd';
            botonAgregarAlCarrito.addEventListener('click', function() {
                var datosProducto = new URLSearchParams();
                datosProducto.append("id",producto.idProducto);
                datosProducto.append("nombre",producto.nombre);
                datosProducto.append("precio",producto.precio);
                datosProducto.append("foto", producto.fotografia);
                location.href ='http://127.0.0.1:5501/Actualizar.html?'+ datosProducto.toString();    
         
        });
        elementoProducto.appendChild(botonAgregarAlCarrito);

        var botoneliminar = document.createElement('button');
        botoneliminar.textContent = 'eliminar';
        botoneliminar.className ='btnadd';
        botoneliminar.addEventListener('click', function() {
            eliminarProducto(producto.idProducto)
        });
        elementoProducto.appendChild(botoneliminar);

        listaDeProductos.appendChild(elementoProducto);
    });
})
.catch(function (error) {
    console.log(error);
});

function agregarAlCarrito(idDelProducto) {
// Agrega tu código aquí para agregar el producto al carrito.
// Esto podría implicar enviar una solicitud a tu servidor, actualizar la interfaz de usuario, etc.
console.log('Agregar al carrito: ' + idDelProducto);
 axios.post(URL + `/carrito/agregar/${idDelProducto}`)
 .then(response => {
     console.log(response.data);
 })
 .catch(error => {
     console.error(error);
 });
}
function eliminarProducto(_idProducto) {
    axios.delete(URL + "/borrarProducto/" + _idProducto)
    .then( function (response) {
        alert(response.data)
        location.reload();
    }).catch(function (error) {
        console.log(error)
    });
    }