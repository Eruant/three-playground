(function () {

  var THREE = require('./lib/three.min');
  THREE = THREE || window.THREE;

  var scene, camera, renderer, geometry, material, cube, light, cube2;

  var render = function () {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    cube2.rotation.x -= 0.01;
    cube2.rotation.z += 0.01;

    renderer.render(scene, camera);
    window.requestAnimationFrame(render);

  };

  var init = function () {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    window.document.body.appendChild(renderer.domElement);

    geometry = new THREE.BoxGeometry(1, 1, 1);
    material = new THREE.MeshBasicMaterial({
      color: 0x00ff00
    });

    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    material = new THREE.MeshBasicMaterial({
      color: 0x0000ff
    });
    cube2 = new THREE.Mesh(geometry, material);
    cube2.position.y -= 2;
    scene.add(cube2);

    light = new THREE.PointLight(0xffffff);
    light.position.x = 0;
    light.position.y = 100;
    light.position.z = 0;
    scene.add(light);

    camera.position.z = 5;
    render();
  };

  init();

}());
