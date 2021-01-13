//PASTE LOCAL SERVER IP BELOW
const socket = io.connect('http://YOUR IP:8889');

//send buttonpress to server
function a(){
document.getElementById("Steam").onclick = function () {
    var bttid = "Steam"
    socket.emit('click', bttid)
}
document.getElementById("mute").onclick = function () {
    var bttid = "mute"
    socket.emit('click', bttid)
}
document.getElementById("back").onclick = function () {
    var bttid = "back"
    socket.emit('click', bttid)
}
document.getElementById("fwd").onclick = function () {
    var bttid = "fwd"
    socket.emit('click', bttid)
}
document.getElementById("pause").onclick = function () {
    var bttid = "pause"
    socket.emit('click', bttid)
}
}
setInterval(a, 1000)