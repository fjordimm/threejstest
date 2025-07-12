import * as Three from "three";

const RESOLUTION_MULTIPLIER = 1.0;

export function start()
{
    const canvas = document.querySelector("#rendering-canvas");
    const renderer = new Three.WebGLRenderer({ antialias: true, canvas });

    const scene = new Three.Scene();

    const camera = new Three.PerspectiveCamera(75, 2, 0.1, 5);
    camera.position.z += 2;

    const cube = new Three.Mesh(
        new Three.BoxGeometry(1, 1, 1),
        new Three.MeshBasicMaterial({ color: 0x44aa88 })
    );
    scene.add(cube);

    renderer.render(scene, camera);

    function nextFrame(time)
    {
        time *= 0.001;

        if (renderer.domElement.width !== renderer.domElement.clientWidth
         || renderer.domElement.height !== renderer.domElement.clientHeight)
        {
            renderer.setSize(renderer.domElement.clientWidth * RESOLUTION_MULTIPLIER, renderer.domElement.clientHeight * RESOLUTION_MULTIPLIER, false);

            camera.aspect = renderer.domElement.clientWidth / renderer.domElement.clientHeight;
            camera.updateProjectionMatrix();
        }

        cube.rotation.x = time;
        cube.rotation.y = time;

        renderer.render(scene, camera);
        requestAnimationFrame(nextFrame);
    }
    requestAnimationFrame(nextFrame);

    // const scene = new Three.Scene();
    // const camera = new Three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    // const renderer = new Three.WebGLRenderer();
    // renderer.setSize( window.innerWidth, window.innerHeight );
    // renderer.setAnimationLoop( animate );
    // document.body.appendChild( renderer.domElement );

    // const geometry = new Three.BoxGeometry( 1, 1, 1 );
    // const material = new Three.MeshBasicMaterial( { color: 0x00ff00 } );
    // const cube = new Three.Mesh( geometry, material );
    // scene.add( cube );

    // camera.position.z = 5;

    // function animate()
    // {

    //     cube.rotation.x += 0.01;
    //     cube.rotation.y += 0.01;

    //     renderer.render( scene, camera );
    // }
}
