(function () {

  var THREE = require('./lib/three.min');
  THREE = THREE || window.THREE;

  var scene, camera, renderer, geometry, material, cube;

  var render = function () {

    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;

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
    camera.position.z = 5;

    render();
  };

  init();

}());