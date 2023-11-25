const URL = 'http://localhost:80'
axios.get(URL+'/listaProductosPorCategoria/Higiene Personal')
.then(function (respuesta) {
        
        var productos = respuesta.data;
        var listaDeProductos = document.getElementById('product-list');
        
        productos.forEach(function(producto) {
        
            var elementoProducto = document.createElement('div');
            elementoProducto.className ='item';
    
            var imagenDelProducto = document.createElement('img');
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