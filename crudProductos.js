
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
    const _categoria = document.getElementById("categorias").value
    var _fotografia = document.getElementById("fotografia").value

  
   if (fotografiaFile == null) {
  
    console.log("foto no obtenida")
  
} else {
    var fotografiaFile = _fotografia.files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        //codifica a base 64 porque aron quiere 
        var fotografiaBase64 = e.target.result;
        console.log("fotografia convertida a base 64: " + fotografiaBase64)
        /*--------------------------------------quitar comentario cuando el sbackend de la foto este listo---------------------------*/
        // subirFoto(fotografiaBase64);
         /*--------------------------------------quitar comentario cuando el sbackend de la foto este listo---------------------------*/
    }
    reader.readAsDataURL(fotografiaFile);
   }



    if (!isNaN(_precio)) {
     agregarProducto(_nombre,_precio,_fotografia,_categoria)
        alert("producto de categoria "+_categoria)
    }
    else{
       alert("Precio tiene que ser un numero")
    }


   

});

function agregarProducto(_nombre,_precio,_foto,_categoria) {
    
    axios.post(URL + 'agregarProducto',
    {
        "nombre": _nombre,
        "precio": _precio,
        "fotografia": _foto,    
        "categoria":_categoria
     })
    .then( function (response) {
        alert(response.data)
        location.reload();
    }).catch(function (error) {
    console.log(error)
})
}

function subirFoto(fotoConvertida) {
    axios.post(URL + 'agregarProducto',
        {
            "fotografia":fotoConvertida,    
         })
        .then( function (response) {
            alert(response.data)
            location.reload();
        }).catch(function (error) {
        console.log(error)
    })
}





