const form = document.getElementById('form')
const URL = 'http://localhost:80'

const CREATE = 201

/*
Te hice algunos cambios y son los siguientes: 💩
* Le dí un evento al formulario, (ya que no es correcto enviar un datos por medio de un evento de un boton con 'click') para eso existe el evento 'submit' y así sería lo mas correcto. 🙂
* Pase el código de usar promesas (then() y catch()) a trabajar con async/await es una manera mas clara de escribir código y es lo recomendable cuando se trabaja con código asincrono. ✅
* Utilice un trycatch el catch te obtendrá tu error como si fuera el catch() que usabas.
* En la condición hace basicamente lo que hace ramon con la condición del "OK", si entra manda una excepción y ya no se ejecuta lo demás osea mostrar por consola data
*/

form.addEventListener('submit', async ( e ) => {
  e.preventDefault()

  const user = document.getElementById('user').value
  const password = document.getElementById('password').value

  if(user==""){
    const verificacion=document.getElementById('lbConfirmacionCorreo');
    verificacion.innerHTML ="Correo invalido";
  }  
  if(password==""){
    const verificacion2=document.getElementById('lbConfirmacionPassword');
    verificacion2.innerHTML ="Contraseña invalida";
  }
  

  try {
    const data = await axios.post(URL+"/loging", {
      "correo": user,
      "password": password
      // Aquí tu lo pondrías así: "user: user" y "password: password", pero como la llave y variable tienen el mismo nombre js lo toma como llave-valor no marcará errores, si es que tu lo pones "user: inputUser" ya no funcionaría, solo jala cuando la variable tiene el mismo nombre que el identificador o llave. Basicamente hacerlo así "user: user" es redundante para JavaScript 🙂, espero haber sido claro.
    })

    location.href ='http://127.0.0.1:5500/paginaPrincipal.html';
    console.log(data.data);

  } catch (error) {
   console.log(error);
  }
})