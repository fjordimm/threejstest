
import { WRITABLE_FIELD, READONLY_FIELD } from "util/classUtil.js";
import Game from "game/Game.js";

export default class ThreeJsTest extends Game
{
    constructor({ renderingCanvas, antialias })
    {
        super({ renderingCanvas: renderingCanvas, antialias: antialias });
    }

    _onStart(gameState)
    {
        console.log("helooooooooooooo");
    }

    _onFrame(gameState)
    {
        console.log("yipeee");
    }
}
