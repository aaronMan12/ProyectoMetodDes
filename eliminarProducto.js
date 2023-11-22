const URL = 'http://localhost:80/'
const accion_boton_elimiar
= document.getElementById('eliminar-producto')





accion_boton_elimiar.addEventListener('submit',
function (evt){
    console.log("entro event")
evt.preventDefault();
const idProducto = document.getElementById("id").value;
if (!isNaN(idProducto)) {
    eliminarProducto(idProducto);
}
else{
   alert("id  tiene que ser un numero")
}

});

function eliminarProducto(_idProducto) {
axios.delete(URL + "borrarProducto/" + _idProducto)
.then( function (response) {
    alert(response.data)
    location.reload();
}).catch(function (error) {
    console.log(error)
});
}
