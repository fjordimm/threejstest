
import { WRITABLE_FIELD, READONLY_FIELD } from "util/classUtil.js";
import * as three from "three";
import GameEntity from "game/gameObjects/GameEntity.js";

export default class Camera extends GameEntity
{
    constructor()
    {
        super(new three.PerspectiveCamera(75, 2, 0.1, 5));
    }
}
