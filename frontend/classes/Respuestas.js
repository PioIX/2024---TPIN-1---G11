var respuestasId = 1
class Respuesta {
    constructor(contenido, jugadorId) {
        this.contenido = contenido,
        this.jugadores = [jugadorId],
        this.id = respuestasId,
        preguntasId++;
    }
}
const respuestas = [
    new Respuesta ("¿"),
    new Respuesta("?"),
    new Respuesta("?"),
]