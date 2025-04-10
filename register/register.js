const firebaseConfig = {
    apiKey: "AIzaSyCOjNo9fg_ZjFv6Asdrcg7cfSCxnAEp9RE",
    authDomain: "una-introduccion-a-filosofia.firebaseapp.com",
    projectId: "una-introduccion-a-filosofia",
    storageBucket: "una-introduccion-a-filosofia.appspot.com",
    messagingSenderId: "791153859549",
    appId: "1:791153859549:web:eb8a585880b99cb97eb434"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (nombre === "" || apellido === "" || email === "" || password === "") {
        console.error("Por favor, asegúrate de que todos los campos están llenos.");
        // Aquí podrías mostrar un mensaje de error visible al usuario
        return;
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log(`Usuario registrado con UID: ${userCredential.user.uid}`);
            const user = userCredential.user;

            // Guardar información adicional del usuario
            const userRef = db.collection('usuarios').doc(user.uid);
            return userRef.set({
                nombre: nombre,
                apellido: apellido,
                email: email // opcional, ya que el correo ya está asociado con la cuenta de usuario
            });
        })
        .then(() => {
            const user = firebase.auth().currentUser;
            if (user) {
                // Inicializar el documento de progreso del usuario
                const progresoRef = db.collection('progresoUsuarios').doc(user.uid);
                return progresoRef.set({
                    userID: user.uid,
                    "progreso": {
                        "prologo": {
                          "subtema1": false
                        },
                        "capitulo1": {
                          "subtema1": false,
                          "subtema2": false,
                          "subtema3": false,
                          "subtema4": false,
                          "subtema5": false,
                          "subtema6": false
                        },
                        "capitulo2": {
                          "subtema1": false,
                          "subtema2": false,
                          "subtema3": false,
                          "subtema4": false,
                          "subtema5": false,
                          "subtema6": false,
                          "subtema7": false,
                          "subtema8": false,
                          "subtema9": false,
                          "subtema10": false,
                          "subtema11": false,
                          "subtema12": false,
                          "subtema13": false,
                          "subtema14": false,
                          "subtema15": false,
                          "subtema16": false,
                          "subtema17": false
                        },
                        "capitulo3": {
                          "subtema1": false,
                          "subtema2": false,
                          "subtema3": false,
                          "subtema4": false,
                          "subtema5": false,
                          "subtema6": false,
                          "subtema7": false,
                          "subtema8": false,
                          "subtema9": false,
                          "subtema10": false,
                          "subtema11": false,
                          "subtema12": false,
                          "subtema13": false,
                          "subtema14": false,
                          "subtema15": false
                        },
                        "capitulo4": {
                          "subtema1": false,
                          "subtema2": false,
                          "subtema3": false,
                          "subtema4": false,
                          "subtema5": false,
                          "subtema6": false,
                          "subtema7": false,
                          "subtema8": false
                        },
                        "capitulo5": {
                          "subtema1": false,
                          "subtema2": false,
                          "subtema3": false,
                          "subtema4": false,
                          "subtema5": false,
                          "subtema6": false,
                          "subtema7": false,
                          "subtema8": false,
                          "subtema9": false
                        },
                        "capitulo6": {
                          "subtema1": false,
                          "subtema2": false,
                          "subtema3": false,
                          "subtema4": false,
                          "subtema5": false,
                          "subtema6": false
                        },
                        "capitulo7": {
                          "subtema1": false,
                          "subtema2": false,
                          "subtema3": false,
                          "subtema4": false,
                          "subtema5": false,
                          "subtema6": false,
                          "subtema7": false,
                          "subtema8": false,
                          "subtema9": false
                        },
                        "capitulo8": {
                          "subtema1": false,
                          "subtema2": false,
                          "subtema3": false,
                          "subtema4": false,
                          "subtema5": false,
                          "subtema6": false,
                          "subtema7": false,
                          "subtema8": false,
                          "subtema9": false,
                          "subtema10": false,
                          "subtema11": false,
                          "subtema12": false,
                          "subtema13": false,
                          "subtema14": false
                        },
                        "capitulo9": {
                          "subtema1": false,
                          "subtema2": false
                        },
                        "capitulo10": {
                          "subtema1": false,
                          "subtema2": false,
                          "subtema3": false
                        },
                        "capitulo11": {
                          "subtema1": false
                        },
                        "capitulo12": {
                          "subtema1": false,
                          "subtema2": false
                        }
                      }
                });
            }
        })
        .then(() => {
            console.log("Usuario registrado y progreso inicializado");
            // Redirigir al usuario o actualizar la interfaz de usuario aquí
            window.location.href = '/login/login.html'; // Cambia esta línea por la URL de tu página de destino
        })
        .catch((error) => {
            console.error("Error en el registro o al guardar en Firestore: ", error);
            // Mostrar un mensaje de error al usuario aquí
            alert("Error en el registro: " + error.message); // Ejemplo simple de manejo de errores
        });
});
