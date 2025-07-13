
import { WRITABLE_FIELD, READONLY_FIELD } from "util/classUtil.js";
import * as three from "three";
import GameState from "game/GameState.js";

export default class Game
{
    constructor({ renderingCanvas, antialias })
    {
        READONLY_FIELD(this, "gameState", new GameState({ renderingCanvas: renderingCanvas, antialias: antialias }));
    }

    start()
    {
        const gameState = this.gameState;

        const cube = new three.Mesh(
            new three.BoxGeometry(1, 1, 1),
            new three.MeshBasicMaterial({ color: 0x44aa88 })
        );
        gameState.mainRenderingScene.add(cube);
        
        function onNextFrame()
        {
            if (gameState.renderer.domElement.width !== gameState.renderer.domElement.clientWidth
             || gameState.renderer.domElement.height !== gameState.renderer.domElement.clientHeight)
            {
                gameState.renderer.setSize(gameState.renderer.domElement.clientWidth, gameState.renderer.domElement.clientHeight, false);

                gameState.mainCamera.rend.aspect = gameState.renderer.domElement.clientWidth / gameState.renderer.domElement.clientHeight;
                gameState.mainCamera.rend.updateProjectionMatrix();
            }
        }

        gameState.renderer.render(gameState.mainRenderingScene, gameState.mainCamera.rend);
        requestAnimationFrame(onNextFrame);
    }
}
