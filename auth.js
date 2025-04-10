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

const db = firebase.firestore();
window.db = db; 


  
  firebase.auth().onAuthStateChanged(user => {
    const authLinkContainer = document.getElementById('authLinkContainer');
    
    if (user) {
        // Usuario está autenticado
        authLinkContainer.innerHTML = '<a href="#" id="logoutButton">Log Out</a>';
  
        // Manejo del cierre de sesión
        document.getElementById('logoutButton').addEventListener('click', (e) => {
            e.preventDefault();
            firebase.auth().signOut().then(() => {
                window.location.reload(); // Recargar la página después de cerrar sesión
            });
        });
    } else {
        // No hay usuario autenticado
        authLinkContainer.innerHTML = '<a href="/login/login.html">Log In</a>';
    }
  });
