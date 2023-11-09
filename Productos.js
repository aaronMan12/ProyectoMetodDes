axios.get('http://localhost/listaProductos')
.then(function (respuesta) {
        
        var productos = respuesta.data;
        var listaDeProductos = document.getElementById('lista-de-productos');
        
        productos.forEach(function(producto) {
        
            var elementoProducto = document.createElement('div');
            elementoProducto.className ='item';
    
            var imagenDelProducto = document.createElement('img');
            imagenDelProducto.src = producto.fotografia;
            elementoProducto.appendChild(imagenDelProducto);
            
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
            botonAgregarAlCarrito.className ='btnadd';botonAgregarAlCarrito.addEventListener('click', function() {
            agregarAlCarrito(producto.id);
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
// Agrega tu código aquí para agregar el producto al carrito.
// Esto podría implicar enviar una solicitud a tu servidor, actualizar la interfaz de usuario, etc.
}