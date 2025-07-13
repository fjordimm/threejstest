
import { WRITABLE_FIELD, READONLY_FIELD } from "util/classUtil.js";
import * as three from "three";
import GameObjectManager from "game/gameState/GameObjectManager.js";
import Camera from "game/gameObjects/special/Camera.js";

export default class Game
{
    constructor({ renderingCanvas, antialias })
    {
        READONLY_FIELD(this, "renderingCanvas", renderingCanvas);
        READONLY_FIELD(this, "renderer", new three.WebGLRenderer({ antialias: antialias, canvas: this.renderingCanvas }));
        READONLY_FIELD(this, "mainRenderingScene", new three.Scene());

        READONLY_FIELD(this, "gameObjectManager", new GameObjectManager(this.mainRenderingScene));

        READONLY_FIELD(this, "mainCamera", new Camera());

        READONLY_FIELD(this, "materialMemo", new Map());
        READONLY_FIELD(this, "geometryMemo", new Map());

        WRITABLE_FIELD(this, "_time", 0);
    }

    getTime()
    {
        return this._time;
    }
}
