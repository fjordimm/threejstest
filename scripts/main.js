
import ThreeJsTest from "game/ThreeJsTest.js";

let game = new ThreeJsTest({
    renderingCanvas: document.querySelector("#rendering-canvas"),
    antialias: true
});

game.start();