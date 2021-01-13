//PASTE LOCAL SERVER IP BELOW
const socket = io.connect('http://YOUR IP:8889');
//dont update if the links are same
socket.on('embedlink', embedlink => {
    console.log(embedlink);
   if (document.getElementById("embed").src == embedlink) {
    } else {
        document.getElementById("embed").src = embedlink
    }
});
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