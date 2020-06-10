//WELCOME TO JÉRÉMIE - 3D INTERACTIVE MAP

//Three JS Components
var scene, camera, renderer;
//Three JS Raycasting
var raycaster, mouse, intersects;
//Dragging Functionality
var isUserInteracting = false, disableClick = false;
onMouseDownMouseX = 0, onMouseDownMouseY = 0,
lon = 90, onMouseDownLon = 0,
lat = 0, onMouseDownLat = 0,
phi = 0, theta = 0;
//Globe
var globeGeometry, panorama, globe;
//Cubes
var cubeInfo = []
//Title
var img, plane;
//Creditis
var credits, creditsMesh;
//Container
var container = document.getElementById("container");

initialize();
animate();

function initialize(){		
	//scene
	scene = new THREE.Scene();
	
	//camera
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
	camera.target = new THREE.Vector3( 0, 0, 0 );

	//renderer
	renderer = new THREE.WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );

	//raycaster
	raycaster = new THREE.Raycaster();
	mouse = new THREE.Vector2();

	//Globe
	globeGeometry = new THREE.SphereGeometry( 500, 60, 40 );
	globeGeometry.scale(-1,1,1);
	panorama = new THREE.MeshBasicMaterial({
			map: new THREE.TextureLoader().load('../assets/map/pano.jpg')
		});
	globe = new THREE.Mesh( globeGeometry, panorama );
	scene.add( globe );

	//Cubes
	cubeInfo = [
		{xPos:-485, yPos:-100, zPos:0, size:10, name: "houses", url: "../houses", color:0xf9f7ab},
		{xPos:-350, yPos:-80, zPos:350, size:10, id: "mobile", url: "../mobileclinic", color:0xf0818f},
		{xPos:-440, yPos:-80, zPos:-210, size:10, id: "goats", url: "../goats", color:0xa4d4a6},
		{xPos:-315, yPos:-60, zPos:-380, size:10, id: "clinic", url: "../clinic", color:0x96add9}
	];
	
	for(var i=0; i<cubeInfo.length; i++){
		var cubeTexture = new THREE.MeshBasicMaterial({ color:0xffffff});
		var cubeTexture$ = new THREE.MeshBasicMaterial({ color:cubeInfo[i].color});

		var cube = new THREE.Mesh(
			new THREE.ConeGeometry(cubeInfo[i].size,cubeInfo[i].size,cubeInfo[i].size),cubeTexture
			);
		cube.hover = cubeTexture$;
		cube.position.x = cubeInfo[i].xPos;
		cube.position.y = cubeInfo[i].yPos;
		cube.position.z = cubeInfo[i].zPos;
		cube.name = cubeInfo[i].name;
		cube.url = cubeInfo[i].url;
		scene.add(cube);
	}
}

//Event Listeners
document.addEventListener( 'mousedown', onDocumentMouseDown, false );
document.addEventListener( 'mousemove', onDocumentMouseMove, false );
document.addEventListener( 'mouseup', onDocumentMouseUp, false );
window.addEventListener( 'resize', onWindowResize, false );

//Event Functions
function onDocumentMouseDown(event){
	if(disableClick == false){
		event.preventDefault();
		isUserInteracting = true;
		onPointerDownPointerX = event.clientX;
		onPointerDownPointerY = event.clientY;
		onPointerDownLon = lon;
		onPointerDownLat = lat;

		//Raycaster
		mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
		mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;	
		raycaster.setFromCamera( mouse, camera );	
		intersects = raycaster.intersectObjects(scene.children, true);
		if(intersects.length > 1){
			window.open(intersects[0].object.url, "_self");
		}
	}			
}
function onDocumentMouseMove(event){
	if ( isUserInteracting === true ) {
		lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
		lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
	}	
}
function onDocumentMouseUp(event){
	isUserInteracting = false;
}
function onWindowResize(event) {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( window.innerWidth, window.innerHeight );
}

//Update and Render
function animate(){
	requestAnimationFrame(animate);
	update();
};

function update(){
	if (isUserInteracting === false) {
		lon += .005;
	}
	lat = Math.max( - 85, Math.min( 85, lat ) );
	phi = THREE.Math.degToRad( 90 - lat );
	theta = THREE.Math.degToRad( lon );

	camera.target.x = 500 * Math.sin(phi) * Math.cos(theta);
	camera.target.y = 500 * Math.cos(phi);
	camera.target.z = 500 * Math.sin(phi) * Math.sin(theta);
	camera.lookAt(camera.target);
	
	renderer.render(scene, camera);
}