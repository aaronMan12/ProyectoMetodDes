
const URL = 'http://localhost:80/'

const accion_boton_actualizar
    = document.getElementById("botonActualizar")
const accion_boton_crear
    = document.getElementById('botonCrear')
mostrarProducto()
accion_boton_crear.addEventListener(
    'click',
    function (evt){
    console.log("entro event")
    evt.preventDefault();
    const _nombre = document.getElementById("nombre").value
    const _precio = document.getElementById("precio").value
    const _fotografia = document.getElementById("fotografia").value
    agregarProducto(_nombre,_precio,_fotografia)
});

accion_boton_actualizar.addEventListener('click',
    function (evt) {
    evt.preventDefault();
    const  idProducto =document.getElementById("acid").value
    const nombre = document.getElementById("acnombre").value
    const precio = document.getElementById("acprecio").value
    const fotografia = document.getElementById("acfotografia").value

    modificarProducto(idProducto,nombre,precio,fotografia)
});


function mostrarProducto(){
    axios.get(URL+'/listaProductos')
.then(function (respuesta) {
        
        var productos = respuesta.data;
        var listaDeProductos = document.getElementById('product-list');
        
        productos.forEach(function(producto) {
        
            var elementoProducto = document.createElement('div');
            elementoProducto.className ='item';
    
            var imagenDelProducto = document.createElement('img');
            imagenDelProducto.src = producto.fotografia;
            elementoProducto.appendChild(imagenDelProducto);

            var idDelProducto = document.createElement('p');
            idDelProducto.textContent = producto.idProducto;
            elementoProducto.appendChild(idDelProducto);
            
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
    
           

        listaDeProductos.appendChild(elementoProducto);
    });
})
.catch(function (error) {
    console.log(error);
});
   
}
function agregarProducto(_nombre,_precio,_foto) {


    axios.post(URL + 'agregarProducto',
        {
            "nombre": _nombre,
            "precio": _precio,
            "fotografia": _foto
         })
        .then( function (response) {
            alert(response.data)
            location.reload();
        }).catch(function (error) {
        console.log(error)
    })
}


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



accion_boton_elimiar.addEventListener('submit',
    function (evt){
        console.log("entro event")
    evt.preventDefault();
    const idProducto = document.getElementById("id").value;
    eliminarProducto(idProducto);
});

function eliminarProducto(_idProducto) {
axios.delete(URL + 'borrarProducto/' + _idProducto)
    .then( function (response) {
        alert(response.data)
        location.reload();
    }).catch(function (error) {
        console.log(error)
    });
}
}