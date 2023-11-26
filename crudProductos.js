const URL = 'http://localhost:80/';

const accion_boton_crear = document.getElementById('botonCrear');

accion_boton_crear.addEventListener('click', function (evt) {
    console.log("entro event");
    evt.preventDefault();

    const _nombre = document.getElementById("nombre").value;
    const _precio = document.getElementById("precio").value;
    const _categoria = document.getElementById("categoria").value;
    const _fotografiaInput = document.getElementById("fotografia");

    if (!_fotografiaInput.files || _fotografiaInput.files.length === 0) {
        console.log("foto no obtenida");
    } else {
        var fotografiaFile = _fotografiaInput.files[0];
        var extension = fotografiaFile.name.split('.').pop().toLowerCase();

        if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
            var reader = new FileReader();
            reader.onload = function (e) {
                // codifica a base64 porque así lo necesitas
                var fotografiaBase64 = e.target.result;
                console.log("fotografia convertida a base64: " + fotografiaBase64);
                agregarProducto(_nombre, _precio, fotografiaBase64, _categoria);
            };
            reader.readAsDataURL(fotografiaFile);
        } else {
            alert("El archivo debe tener una extensión PNG o JPG.");
        }
    }

    if (!isNaN(_precio)) {
        alert("producto de categoria " + _categoria);
    } else {
        alert("Precio tiene que ser un numero");
    }
});

function agregarProducto(_nombre, _precio, _foto, _categoria) {
    axios.post(URL + 'agregarProducto', {
        "nombre": _nombre,
        "precio": _precio,
        "fotografia": _foto,
        "categoria": _categoria
    })
    .then(function (response) {
        alert(response.data);
        location.reload();
    })
    .catch(function (error) {
        console.error("Error al agregar el producto:", error);
        // Agregar manejo de errores específico aquí
    });
}
