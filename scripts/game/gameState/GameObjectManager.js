
import { WRITABLE_FIELD, READONLY_FIELD } from "util/classUtil.js";
import GameEntity from "game/gameObjects/GameEntity.js";

export default class GameObjectManager
{
    constructor(renderingScene)
    {
        READONLY_FIELD(this, "_renderingScene", renderingScene);
        READONLY_FIELD(this, "_objs", new Set());
    }

    add(obj)
    {
        this._objs.add(obj);

        if (obj instanceof GameEntity)
        { this._renderingScene.add(obj.rend); }
    }

    delete(obj)
    {
        this._objs.delete(obj);

        if (obj instanceof GameEntity)
        { this._renderingScene.remove(obj.rend); }
    }

    has(obj)
    {
        return this._objs.has(obj);
    }

    values()
    {
        return this._objs.values();
    }
}
