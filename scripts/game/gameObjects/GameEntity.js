
import { WRITABLE_FIELD, READONLY_FIELD } from "util/classUtil.js";
import GameObject from "game/gameObjects/GameObject.js";

export default class GameEntity extends GameObject
{
    constructor(rend)
    {
        super();
        
        WRITABLE_FIELD(this, "rend", rend);
    }

    getPosition()
    { return this.rend.position; }

    getRotation()
    { return this.rend.rotation; }

    getRotationQuat()
    { return this.rend.quaternion; }

    getScale()
    { return this.rend.scale; }

    onNewFrame(time, deltaTime)
    { }
}
