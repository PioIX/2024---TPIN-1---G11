class Pregunta {
    constructor(id,pregunta) {
            this.contenido = contenido,
            this.opcion1 = opcion1,
            this.opcion2 = opcion2,
            this.opcion3 = opcion3,
            this.opcion4 = opcion4,
            // this.jugadorId = [jugadorId],
            this.id = id
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

let preguntas = [];

/*
let preguntas = [
    new Pregunta("¿Quien de estos jugadores de la seleccion argentina fue infiel?"),
    new Pregunta("¿Como se llama el ultimo tema de WandaNara?"),
    new Pregunta("¿Cual de estas parejas de youtubers se separo más recientemente?"),
]
*/