var respuestasId = 1
class Respuesta {
    constructor(contenido, idPregunta) {
        this.contenido = contenido,
        //this.jugadores = [jugadorId],
        this.id = respuestasId,
        this.idPregunta = idPregunta,
        preguntasId++;
    }
}
const respuestas = [
    new Respuesta ("¿"),
    new Respuesta("?"),
    new Respuesta("?"),
]