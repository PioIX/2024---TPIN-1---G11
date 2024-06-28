function getJugador() {
    return document.getElementById("jugador").value;
}
function getPassword() {
    return document.getElementById("password").value;
}
function changeScreen() {
    const notepad = document.getElementById("notepad");
    const login = document.getElementById("login");
    if(notepad.style.display !== "none") {
        notepad.style.display = "none";
        login.style.display = "";
    }
    else {
        notepad.style.display = "";
        login.style.display = "none";
    }
}
function getPreguntaContent() {
    return document.getElementById("content").value;
}

function drawNewPregunta(content, id) {
    document.getElementById("allPreguntas").innerHTML += `        
        <div class="border" id="preguntaID${id}">
            <h5>Pregunta Nº: ${id}</h5>
            <p id="noteContent${id}">${content}</p>
        </div>
        <br>`;
}