(function () {

  var THREE = require('./lib/three.min');
  THREE = THREE || window.THREE;

  var scene, camera, renderer, geometry, material, cube, light, loader, house;

  var render = function () {

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    if (house) {
      house.rotation.y -= 0.01;
    }

    renderer.render(scene, camera);
    window.requestAnimationFrame(render);

  };

  var init = function () {

    loader = new THREE.JSONLoader();

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
    cube.position.y = 2;
    scene.add(cube);

    material = new THREE.MeshBasicMaterial({
      color: 0x0000ff
    });

    light = new THREE.PointLight(0xffffff);
    light.position.x = 0;
    light.position.y = 100;
    light.position.z = 0;
    scene.add(light);

    camera.position.z = 5;

    loader.load('../meshes/house.js', function (geometry) {
      house = new THREE.Mesh(
        geometry,
        material
      );
      house.position.y = -1;

      scene.add(house);
    
      render();
    });
  };

  init();

}());
