var preguntasId = 1
class Pregunta {
    constructor(contenido, jugadorId) {
            this.contenido = contenido,
            this.jugadorId = [jugadorId],
            this.id = preguntasId,
            preguntasId++;
    }
    agregarJugador(jugadorId){
        this.jugadores.push(jugadorId)
        return true
    }

    eliminarUsuario(idUsuario){
        let i =0;
        for (i in this.usuarios){
            if (idUsuario == this.usuarios[i]){
            this.usuarios.splice(i, 1)
            return true
        }
    }
    return false
   }
}
const preguntas = [
    new Pregunta("¿Quien de estos jugadores de la seleccion argentina fue infiel?"),
    new Pregunta("¿Como se llama el ultimo tema de WandaNara?"),
    new Pregunta("¿Cual de estas parejas de youtubers se separo más recientemente?"),
]
