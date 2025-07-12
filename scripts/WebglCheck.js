import WebGL from 'three/addons/capabilities/WebGL.js';

if (!WebGL.isWebGL2Available())
{
    const warning = WebGL.getWebGL2ErrorMessage();
    console.log(`WEBGL IS NOT COMPATIBLE!\nError:\n${warning}`);
}