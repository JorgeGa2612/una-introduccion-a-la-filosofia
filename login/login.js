// Asegúrate de que la configuración de Firebase ha sido inicializada en este archivo o en un archivo separado que se carga antes de este.
const firebaseConfig = {
    apiKey: "AIzaSyCOjNo9fg_ZjFv6Asdrcg7cfSCxnAEp9RE",
    authDomain: "una-introduccion-a-filosofia.firebaseapp.com",
    projectId: "una-introduccion-a-filosofia",
    storageBucket: "una-introduccion-a-filosofia.appspot.com",
    messagingSenderId: "791153859549",
    appId: "1:791153859549:web:eb8a585880b99cb97eb434"
  };
  firebase.initializeApp(firebaseConfig);


// Agrega un evento listener al formulario de inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    // Iniciar sesión con Firebase Authentication
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Inicio de sesión exitoso
            console.log("Inicio de sesión exitoso con usuario:", userCredential.user);
            // Aquí puedes redirigir al usuario a su página de perfil o a la página principal
            window.location.href = './index.html'; // Reemplaza esto con la URL que desees
        })
        .catch((error) => {
            // Manejo de errores, como credenciales incorrectas o problemas de conexión
            console.error("Error al iniciar sesión: ", error);
            alert("Error al iniciar sesión: Correo o Contraseña erroneas. "); // Mostrar un mensaje de error al usuario
        });
});
