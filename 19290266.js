
const canvas = document.querySelector("#glcanvas");
var gl = WebGLUtils.setupWebGL(canvas);
var program;
var positionLocation;
var resolutionLocation;
var colorLocation; 
var translationLocation;
var rotationLocation;
var scaleLocation;
var thetaLocation;
var postPoneLocation;
var positionBuffer;

var selected;
var r,s;
var interval;


class Letter{
	constructor(verticies,name){
		this.vertices = verticies;
		this.name = name;
		this.length = length(this.vertices)*length(this.vertices)*length(this.vertices);
		this.rotation = [1, 1];
		this.scale = [0.5, 0.5];

		const d = new Date();
		let hour = d.getHours();
		if(hour<7)
		this.color = [0, 0, 204, 1];
		else if(hour<13)
		this.color = [255, 128, 0, 1];
		else if(hour<18)
		this.color = [255, 255, 51, 1];
		else
		this.color=[224,224,224,1];

		this.theta = 0;
		this.updown = 0;
		this.leftright = 0;
	}
	chaos(){
		this.rotation = [Math.random()*360,Math.random()*360];
		this.scale = [Math.random(),Math.random()];
		this.color = [Math.random(),Math.random(),Math.random(),1];
		this.theta = Math.random()*720;
	}
	

}




document.getElementById("sldRot").onchange = function(){
	if(selected == null)
	return;

	selected.theta = this.value;
	render();
	//alert(selected.theta);

}



document.getElementById("sldSca").onchange = function(){
	if(selected == null)
	return;

	selected.scale = [this.value,this.value];
	render();
	//alert(selected.theta);

}


function colorChanged(e){
	if(selected == null)
	return;
	var color = [0,0,0,1];
	//alert("sdf");
	//var tmp = hexToRgb(this.value);
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.value);
	color[0] = parseInt(result[1], 16)/256;
	color[1] = parseInt(result[2], 16)/256;
	color[2] = parseInt(result[3], 16)/256;

	
	selected.color = color;
	render();
	

}
function chaosClick(){

	if( document.getElementById("btnChaos").chaos=="false"){
		document.getElementById("btnChaos").chaos="true";
		window.interval = setInterval(chaos,100);
		
	}
	else{
		document.getElementById("btnChaos").chaos="false";
		clearInterval(window.interval);
		
	}
}



function chaos(){
	document.getElementById("spnEnd").style.visibility=="visible" ? document.getElementById("spnEnd").style.visibility="hidden" : document.getElementById("spnEnd").style.visibility="visible";
	r.chaos();
	s.chaos();
	render();
	


}

function buttonClick(btn){
	if(btn=="btnR"){
	document.getElementById(btn).style.color="red";
	document.getElementById(btn).style.backgroundColor="#2b00c7";
	document.getElementById("btnS").style.color="black";
	document.getElementById("btnS").style.backgroundColor="white";
	selected = r;
	}
	else{
	document.getElementById("btnR").style.color="black";
	document.getElementById("btnS").style.backgroundColor="#2b00c7";
	document.getElementById("btnS").style.color="red";
	document.getElementById("btnR").style.backgroundColor="white";
	selected = s;
	}

}

function keyPress(e){
	if(selected == null)
	return;

	//console.log(selected);
	if(e.code=='KeyW'){
		selected.updown+=0.1;		
	}
	else if(e.code=='KeyA'){
		selected.leftright-=0.1;
	}
	else if(e.code=='KeyS'){
		selected.updown-=0.1;
	}
	else if(e.code=='KeyD'){
		selected.leftright+=0.1;
	}
	else if(e.code=='KeyQ'){
		selected.theta+=0.1;
	}
	else if(e.code=='KeyE'){
		selected.theta-=0.1;
	}
	else if(e.code='KeyR'){
		if(selected==r){
			buttonClick("btnS");
		}	
		else{
			buttonClick("btnR");
		}

	}
	render();

}




function toBuffer(whatToPut){
	gl.bufferData(gl.ARRAY_BUFFER,flatten(whatToPut.vertices),gl.STATIC_DRAW);
}
function drawScene(whatToPut) {
	
	toBuffer(whatToPut);

	/* DEFAUL SETTINGS */
    // Tell WebGL how to convert from clip space to pixels
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);


    // Tell it to use our program (pair of shaders)
    gl.useProgram(program);

    // Turn on the attribute
    gl.enableVertexAttribArray(positionLocation);

    // Bind the position buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

    // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    var size = 2;          // 2 components per iteration
    var type = gl.FLOAT;   // the data is 32bit floats
    var normalize = false; // don't normalize the data
    var stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    var offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(positionLocation, size, type, normalize, stride, offset);
	/* END OF DEFAULT */

    // set the color
    gl.uniform4fv(colorLocation, whatToPut.color);


    // Set the rotation.
    gl.uniform2fv(rotationLocation, whatToPut.rotation);

    // Set the scale.
    gl.uniform2fv(scaleLocation, whatToPut.scale);

	// Set the postpone.
	gl.uniform2fv(postPoneLocation, [whatToPut.leftright,whatToPut.updown]);

	// Set the theta.
	gl.uniform1f(thetaLocation, whatToPut.theta);

    // Draw the geometry.
    var primitiveType = gl.TRIANGLES;
    var offset = 0;
    var count = whatToPut.length; 
    gl.drawArrays(primitiveType, offset, count);
  }
function render(){
	gl.clearColor(0.0, 0.0, 0.0, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT);
	drawScene(r);
	drawScene(s);
}




window.onload = function init(){
	document.addEventListener('keypress',keyPress);
	
	
	// Initialize the GL context 
	// Only continue if WebGL is available and working
	if (!gl) {
	alert("Unable to initialize WebGL. Your browser or machine may not support it.");
	return;
	}

	 // setup GLSL program
	program = initShaders(gl, "vertex-shader", "fragment-shader");

	 // look up where the vertex data needs to go.
	positionLocation = gl.getAttribLocation(program, "a_position");
   
	 // lookup uniforms
	colorLocation = gl.getUniformLocation(program, "u_color");
	rotationLocation = gl.getUniformLocation(program, "u_rotation");
	scaleLocation = gl.getUniformLocation(program, "u_scale");
    thetaLocation = gl.getUniformLocation(program,"u_theta");
	postPoneLocation = gl.getUniformLocation(program,"u_postpone");

	 // Create a buffer to put positions in
	positionBuffer = gl.createBuffer();

	 // Bind it to ARRAY_BUFFER (think of it as ARRAY_BUFFER = positionBuffer)
	gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
	 // Put geometry data into buffer
	
	
	//translation = [100, 150];
	
	
	
	var vertices = new Float32Array( 
        [

		  -0.95,-0.95,
		  -0.90,0.95,  //1
		  -0.90,-0.95,
		
		  -0.95,0.95,
		  -0.95,-0.95, //2
		  -0.90,0.95,
		  
		  -0.90,0.95,
		  -0.15,0.85, //3
		  -0.90,0.85,

		  -0.15,0.85,
		  -0.15,0.95, //4 
		  -0.90,0.95,

		  -0.15,0.85,
		  -0.15,0.95, //5
		  -0.10,0.85,
		
		  -0.10,0.85,
		  -0.15,0.85, //6
		  -0.15,0.15,

		  -0.10,0.85,
		  -0.10,0.15, //7
		  -0.15,0.15,

		  -0.15,0.10,
		  -0.10,0.15, //8
		  -0.15,0.15,

		  -0.15,0.10,
		  -0.95,0.10, //9
		  -0.15,0.20,
		  
		  -0.15,0.20,
		  -0.95,0.10, //10
		  -0.95,0.20,

		  -0.95,0.20,
		  -0.95,0, //11
		  -0.80,0,
		  
		  -0.10,-0.95,
		  -0.95,0, //12
		  -0.80,0,
		
		  -0.10,-0.95,
		  -0.15,-0.75, //13
		  -0.80,0,
		  
		 
	]);
	
	window.r = new Letter(vertices,"r");
	//toBuffer(r);
	
	

	var vertices = new Float32Array( 
	[
			0.95,0.90,
			0.95,0.95, //1
			0.15,0.90,
		
			0.95,0.95, 
			0.15,0.90, //2
			0.15,0.95,

			0.15,0.90,
			0.15,0.95, //3
			0.10,0.90,
		
			0.10,0.90,
			0.15,0.90, //4
			0.10,0.15,

			0.15,0.90,
			0.15,0.15, //5
			0.10,0.15,

			0.15,0.10,
			0.15,0.15, //6
			0.10,0.15,

			0.15,0.10,
			0.15,0.15, //7
			0.90,0.15,
		
			0.15,0.10,
			0.90,0.10, //8
			0.90,0.15,

			0.95,0.10,
			0.90,0.10, //9
			0.90,0.15,

			0.95,0.10,
			0.90,0.10, //10
			0.90,-0.75,

			0.95,0.10,
			0.95,-0.75, //11
			0.90,-0.75,

			0.90,-0.80,
			0.95,-0.75, //12
			0.90,-0.75,
			
			0.90,-0.80,
			0.10,-0.80, //13
			0.90,-0.75,
			/*
			0.10,-0.75,
			0.10,-0.80, //14
			0.90,-0.75
*/


	 
	]);
	window.s = new Letter(vertices,"s");
	//toBuffer(s);
	render();
		
	


}



