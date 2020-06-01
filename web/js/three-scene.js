
			//Three JS Components
			var scene, camera, renderer;
			//Three JS Raycasting
			var raycaster, mouse, intersects;
			//Dragging Functionality
			var isUserInteracting = false, disableScene = true;
			onMouseDownMouseX = 0, onMouseDownMouseY = 0,
			lon = 0, onMouseDownLon = 0,
			lat = 0, onMouseDownLat = 0,
			phi = 0, theta = 0;
			//Globe
			var globeGeometry, panorama, globe;
			//Hover functionality. Variables for storing before and after states.
			var marker = 2, hoverOn = false, tempObject;
			//Title
			var img, plane;
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
						map: new THREE.TextureLoader().load("textures/test.jpg")
					});
				globe = new THREE.Mesh( globeGeometry, panorama );
				scene.add( globe );

				//Elements
				for(var i=0; i<elementsInfo.length; i++){
					
					var texture = new THREE.TextureLoader().load(elementsInfo[i].img);
	        		
	        		var element = new THREE.Mesh(new THREE.PlaneGeometry(elementsInfo[i].xSize,elementsInfo[i].ySize),new THREE.MeshBasicMaterial({map:texture}));
	        		element.position.x = elementsInfo[i].xPos;
	        		element.position.y = elementsInfo[i].yPos;
	        		element.position.z = elementsInfo[i].zPos;
	        		element.rotation.y = elementsInfo[i].rot;
	        		element.material.transparent = true;
	        		element.material.opacity = 1;
	        		element.url = elementsInfo[i].url;
	        		element.clickable = elementsInfo[i].clickable;
	        		element.hoverable = elementsInfo[i].hoverable;
	        		element.subtitles = elementsInfo[i].subtitles;
	        		element.back = elementsInfo[i].back;

	        		element.default = texture;
	        		element.hover = new THREE.TextureLoader().load(elementsInfo[i].img$);

					scene.add(element);
				}

				//Title
				img = new THREE.MeshBasicMaterial({
					map: new THREE.TextureLoader().load('textures/title.png')
        		});
        		plane = new THREE.Mesh(new THREE.PlaneGeometry(300,150),img);
        		plane.position.x = 200;
        		plane.position.y = 50;
        		plane.rotation.y = 4.71;
        		plane.material.transparent = true
        		plane.material.opacity = 1;			
			}

			//event listeners
			document.addEventListener( 'mousedown', onDocumentMouseDown, false );
			document.addEventListener( 'mousemove', onDocumentMouseMove, false );
			document.addEventListener( 'mouseup', onDocumentMouseUp, false );
			window.addEventListener( 'resize', onWindowResize, false );

			function pauseInteractionWithScene(yesno) {
				disableScene = yesno;
				isUserInteracting = false;
			}

			//event functions
			function onDocumentMouseDown(event){
				if(disableScene == false){
					isUserInteracting = true
					event.preventDefault();
					onPointerDownPointerX = event.clientX;
					onPointerDownPointerY = event.clientY;
					onPointerDownLon = lon;
					onPointerDownLat = lat;

					//for raycaster
					// calculate mouse position in normalized device coordinates
					// (-1 to +1) for both components
					mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
					mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
					// update the picking ray with the camera and mouse position
					raycaster.setFromCamera( mouse, camera );	
					// calculate objects intersecting the picking ray
					intersects = raycaster.intersectObjects(scene.children, true);
					if(intersects.length > 1){
						if(intersects[0].object.clickable == true){
							console.log(intersects[0].object.url)
							showYouTubePlayer(intersects[0].object.url);
						}
						if(intersects[0].object.back == true){
							window.open("../map/index$.html", "_self");
						}
					}
				}
			}

			function onDocumentMouseMove(event){
				if (disableScene == false) {

				if ( isUserInteracting === true ) {
					lon = ( onPointerDownPointerX - event.clientX ) * 0.1 + onPointerDownLon;
					lat = ( event.clientY - onPointerDownPointerY ) * 0.1 + onPointerDownLat;
				}

				//for raycaster
				// calculate mouse position in normalized device coordinates
				// (-1 to +1) for both components
				mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
				mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
				// update the picking ray with the camera and mouse position
				raycaster.setFromCamera( mouse, camera );	
				// calculate objects intersecting the picking ray
				intersects = raycaster.intersectObjects(scene.children, true);


				//for hover effect
				if(marker != intersects.length && intersects != null){
					if(hoverOn == false){
						if(intersects.length > 1){
							if(intersects[0].object.hoverable){
								intersects[0].object.material.map = intersects[0].object.hover;
								intersects[0].object.material.needsUpdate = true;
								//tempObject = intersects[0];
							}
							tempObject = intersects[0];
							hoverOn = true;
						}
					}else{
						if(tempObject.object.hoverable){
							tempObject.object.material.map = tempObject.object.default;
							tempObject.object.material.needsUpdate = true;
						}						
						hoverOn = false;
					}
				}
				marker = intersects.length;
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

			function showTitle(){
				scene.add(plane);
			}
			//update frames and render
			function animate(){
				requestAnimationFrame( animate );
				update();
			};

			function update(){
				console.log('dis  ' + disableScene + 'interact: ' + isUserInteracting)

				if ( isUserInteracting === false) {
					lon += 0.00;
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