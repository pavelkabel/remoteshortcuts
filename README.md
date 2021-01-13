# RemoteShortcuts


Streamdeck-like Node.js lan server, which you can use to remotely execute custom scripts on your Windows PC from nearly any device. With optional Spotify integration, so you can see what is playing on the web client in real time.

## Setup
Please make sure that you have installed all the required libraries:

- [Node.js](https://nodejs.org/en/)
  - when you have node installed, install express, request and socket.io libraries by cmd: npm install 
- [AutoHotkey](https://www.autohotkey.com)
- [curl](https://curl.se)
- [Visual Studio 2019 (optional*)](https://visualstudio.microsoft.com/cs/downloads/)

* In the current build you´ll experience quite a few crashes, I wrote a simple vs program to auto-restart after crash, you do not have to use it, but i recommend it since this way you can hide cmd and build your own application on.

**Visual Studio App configuration**
- Open the project
- Click Process1
- In File Name find your app.js
- In Working Directory find RemoteShortcuts folder
- You can personalise the program, and/or build it
- You´re done!

**Version without Spotify integration**

The only thing that needs to be done here is:

- Go to /public
- Open script.js
- Enter your server´s IP here `const socket = io.connect('http://YOUR IP:8889');`
- Now you can run the server using start.bat!

**Version with Spotify integration**

Make sure that you have created a [Spotify Developer account](https://developer.spotify.com/dashboard/login) and there an application, you will also need refresh token, you can learn how to get it [here](https://benwiz.com/blog/create-spotify-refresh-token/). In your Spotify dev app also set redirect URIs to local ip of your server.

- Enter your refresh token, client id and client secret to tokengen.bat
- Go to /public
- Open script.js
- Enter your server´s IP here `const socket = io.connect('http://YOUR IP:8889');`
- Now you can run the server using start.bat!

For both versions you can change ports in app.js

## Adding / Customizing buttons

Both versions include examples of a virtual keypress, media keys and running an application.
There are 4 parts needed for every button to work.

- in `/public/index.html` every button is defined for example: `<input type="button" name="activate" class="button buttonstm" value="Steam" id="Steam">` or 
```
<button type="button" name="activate" class="button buttonmute" id="mute">
<i class="fas fa-microphone-slash"></i>
</button>
```
for a button with an icon

- in `/public/script.css` the buttonpress is sent to server, every button needs the following script to function, make sure you use the same `id` as in `index.html`
```
document.getElementById("Steam").onclick = function () {
    var bttid = "Steam"
    socket.emit('click', bttid)
}
```
- in `/public/style.css` you can change the style of every button, just make sure that you use the same `class` as in `index.html`

- in the main folder you also need a `.bat` file with the same `id` as in `index.html`, there you can execute custom commands


