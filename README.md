



-------


# Setup For Deployment 👇

- FORK THE REPOSITORY [Here](https://github.com/wmm-malinda/free-dat-bot/fork)

## `Scan QR Code For Session`
[![Cheems Bot](https://repl.it/badge/github/quiec/whatsasena)](https://replit.com/@DGXeon/Cheems-Bot-Multi-Device-Qr-Code-Generator?output%20only=1&lite=1#index.js)

` BUILDPACKS`

```
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/wmm-malinda/free-dat-bot/)
## `Install Manually 👇`
## `Requirements`
* [Node.js](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)
* Any text editor
## `Clone Repo & Installation dependencies`
```bash
apt update & upgrade -y
apt install git -y
pkg install nodejs -y 
git clone https://github.com/wmm-malinda/free-dat-bot
cd free-dat-bot

npm start
```
## `For Termux/Ssh/Ubuntu`
```bash
apt update & upgrade -y
apt install git -y
pkg install nodejs -y 
git clone https://github.com/wmm-malinda/free-dat-bot
cd free-dat-bot
npm start
```
## `For VPS`
```bash
apt install nodejs 
apt install git 
apt install bash
git clone https://github.com/wmm-malinda/free-dat-bot
cd free-dat-bot
npm start
```
## `For 24/7 Activation (Termux)`
```bash
npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs
```
