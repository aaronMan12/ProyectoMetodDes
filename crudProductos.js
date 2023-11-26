
const URL = 'http://localhost:80/'

const accion_boton_crear
    = document.getElementById('botonCrear')


    accion_boton_crear.addEventListener(
    'click',
    function (evt){
    console.log("entro event")
    evt.preventDefault();
    

    const _nombre = document.getElementById("nombre").value
    const _precio = document.getElementById("precio").value
    const _categoria = document.getElementById("categoria").value

    if (!isNaN(_precio)) {
     agregarProducto(_nombre,_precio,_categoria)
        alert("producto de categoria "+_categoria)
    }
    else{
       alert("Precio tiene que ser un numero")
    }


   

});

function agregarProducto(_nombre,_precio,_categoria) {
    
    axios.post(URL + 'agregarProducto',
    {
        "nombre": _nombre,
        "precio": _precio,  
        "categoria":_categoria
     })
    .then( function (response) {
        alert(response.data)
        location.reload();
    }).catch(function (error) {
    console.log(error)
})
}





