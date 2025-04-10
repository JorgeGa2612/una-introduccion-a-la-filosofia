function actualizarEstadoSubtema(capituloId, subtemaId) {
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            // La ruta de actualización para el campo dentro del documento del usuario
            const rutaActualizacion = `progreso.${capituloId}.${subtemaId}`;

            // Referencia al documento del usuario en Firestore
            const docRef = db.collection('progresoUsuarios').doc(user.uid);

            // Preparación de la actualización
            let actualizacion = {};
            actualizacion[rutaActualizacion] = true;

            // Ejecución de la actualización en Firestore
            docRef.update(actualizacion)
                .then(() => {
                    console.log(`Estado actualizado para ${subtemaId}`);
                }).catch(error => {
                    console.error("Error al actualizar el estado: ", error);
                });
        }
    });
}


