
import { WRITABLE_FIELD, READONLY_FIELD } from "util/classUtil.js";
import * as three from "three";
import GameObjectManager from "game/GameObjectManager.js";
import Camera from "game/gameObjects/special/Camera.js";

export default class Game
{
    constructor({ renderingCanvas, antialias })
    {
        READONLY_FIELD(this, "renderingCanvas", renderingCanvas);
        READONLY_FIELD(this, "renderer", new three.WebGLRenderer({ canvas: this.canvas, antialias: antialias }));
        READONLY_FIELD(this, "mainRenderingScene", new three.Scene());

        READONLY_FIELD(this, "gameObjectManager", new GameObjectManager(this.mainRenderingScene));

        READONLY_FIELD(this, "mainCamera", new Camera());
        // this.gameObjectManager.add(this.mainCamera);

        READONLY_FIELD(this, "materialMemo", new Map());
        READONLY_FIELD(this, "geometryMemo", new Map());

        WRITABLE_FIELD(this, "_time", 0);
    }

    getTime()
    {
        return this._time;
    }
}

// const RESOLUTION_MULTIPLIER = 1.0;

// export function start()
// {
//     const canvas = document.querySelector("#rendering-canvas");
//     const renderer = new three.WebGLRenderer({ antialias: true, canvas: canvas });

//     const scene = new three.Scene();

//     const camera = new three.PerspectiveCamera(75, 2, 0.1, 5);
//     camera.position.z += 2;

//     const cube = new three.Mesh(
//         new three.BoxGeometry(1, 1, 1),
//         new three.MeshBasicMaterial({ color: 0x44aa88 })
//     );
//     scene.add(cube);

//     renderer.render(scene, camera);

//     function nextFrame(time)
//     {
//         time *= 0.001;

//         if (renderer.domElement.width !== renderer.domElement.clientWidth
//          || renderer.domElement.height !== renderer.domElement.clientHeight)
//         {
//             renderer.setSize(renderer.domElement.clientWidth * RESOLUTION_MULTIPLIER, renderer.domElement.clientHeight * RESOLUTION_MULTIPLIER, false);

//             camera.aspect = renderer.domElement.clientWidth / renderer.domElement.clientHeight;
//             camera.updateProjectionMatrix();
//         }

//         cube.rotation.x = time;
//         cube.rotation.y = time;

//         renderer.render(scene, camera);
//         requestAnimationFrame(nextFrame);
//     }
//     requestAnimationFrame(nextFrame);
// }

