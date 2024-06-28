var jugadoresId = 1
class Jugador {
constructor  ( nombre, contraseña) {
    this.nombre = nombre,
    this.contraseña = contraseña
    this.id = jugadoresId,
    jugadoresId ++;
}
}
let jugadores = [
    new Jugador ("Camila", "123456"),
    new Jugador ("Rocio", "MENCIONERA"),
    new Jugador("Patricio", "contraseña"),
]