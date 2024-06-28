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
function getNoteContent() {
    return document.getElementById("content").value;
}