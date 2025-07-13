
import Game from "game/Game.js";

let game = new Game({
    renderingCanvas: document.querySelector("#rendering-canvas"),
    antialias: true
});

game.start();