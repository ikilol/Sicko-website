let serial; // variable for the serial object
let latestData = 0; // variable to hold the data
let arr = [];

let phase = 0;
let zoff = 0;
let slider;
let slider1;
let tempo = 0;
let newestData = 0;
let timer = false;
let start = false;
let ok = false;




function setup() {
  createCanvas(windowWidth, 400);
  background(250);


  // serial constructor
  serial = new p5.SerialPort();
  // get a list of all connected serial devices
  serial.list();
  // serial port to use - you'll need to change this
  serial.open('COM6');
  serial.open('COM7');
  serial.open('COM8');
  serial.open('COM9');
  // callback for when the sketchs connects to the server
  serial.on('connected', serverConnected);
  // callback to print the list of serial devices
  serial.on('list', gotList);
  // what to do when we get serial data
  serial.on('data', gotData);
  // what to do when there's an error
  serial.on('error', gotError);
  // when to do when the serial port opens
  serial.on('open', gotOpen);
  // what to do when the port closes
  serial.on('close', gotClose);
  }



function serverConnected() {
  console.log("Connected to Server");
}

// list the ports
function gotList(thelist) {
  console.log("List of Serial Ports:");

  for (let i = 0; i < thelist.length; i++) {
    console.log(i + " " + thelist[i]);
  }
}

function gotOpen() {
  console.log("Serial Port is Open");
}

function gotClose() {
  console.log("Serial Port is Closed");
  latestData = 0;
}

function gotError(theerror) {
  console.log(theerror);
}

// when data is received in the serial buffer

function gotData() {
  let currentString = serial.readLine(); // store the data in a variable
  trim(currentString); // get rid of whitespace
  if (!currentString) return; // if there's nothing in there, ignore it
  console.log(currentString); // print it out
  latestData = currentString; // save it to the global variable

  if (latestData >= 3000 && latestData < 4000){
    ok = true
  }

  if (latestData >= 1000 && latestData <2000){
    ok = true
  }

  if(latestData >= 4000){
    ok = true
  }

  if (ok == true){

    savedata();
    
  }
}

function draw() {
  background(255);

  if (start == false){

    textSize(20);
    textStyle(NORMAL);
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    text("press anywhere\nto start the session", windowWidth/2, windowHeight/2);

  }

  if (start == true){
  var largest = Math.max.apply(Math, arr);

  let sum = arr.reduce((partialSum, a) => partialSum + a, 0);
  console.log(sum);

  textSize(20);
  fill(0);
  noStroke();
  textStyle(NORMAL);
  textAlign(LEFT, CENTER);
  text("Total number\nof icks collected", 650, 100);

  textSize(40);
  textStyle(BOLD);
  text(sum, 650, 150);

  textSize(20);
  textStyle(NORMAL);
  fill(0);
  noStroke();
  textAlign(LEFT);
  text("highest amount\nof icks per session", 650, 250);

  textSize(40);
  textStyle(BOLD);
  text(largest, 650, 300);

  translate(width / 2.7, height / 2);

//------------------------------------------------------------------------------------------STRONGER
//------------------------------------------------------------------------------------------STRONGER
//------------------------------------------------------------------------------------------STRONGER
//------------------------------------------------------------------------------------------STRONGER
//------------------------------------------------------------------------------------------STRONGER
if (latestData >= 3000 && latestData < 4000){
  
  newestData = latestData - 3000;

  textSize(20);
  fill(0);
  textStyle(NORMAL);
  noStroke();
  textAlign(CENTER, CENTER);
  text("stronger ↘", -360, -177);

  textSize(40);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(newestData + " icks", 0, 0);

  }




//------------------------------------------------------------------------------------------LOUDER
//------------------------------------------------------------------------------------------LOUDER
//------------------------------------------------------------------------------------------LOUDER
//------------------------------------------------------------------------------------------LOUDER
//------------------------------------------------------------------------------------------LOUDER
  if (latestData >= 1000 && latestData <2000){
  
  newestData = latestData - 1000;

  textSize(20);
  fill(0);
  textStyle(NORMAL);
  noStroke();
  textAlign(CENTER, CENTER);
  text("louder ↘", -370, -177);

  textSize(40);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(newestData + " icks", 0, 0);
  }


//------------------------------------------------------------------------------------------TIMER
//------------------------------------------------------------------------------------------TIMER
//------------------------------------------------------------------------------------------TIMER
//------------------------------------------------------------------------------------------TIMER
//------------------------------------------------------------------------------------------TIMER

  if (latestData <= 2710 && latestData>=2701){
    timer=true;
    ok = false;
  }

  if (latestData > 2710){
    timer=false;
    ok = false;
  }

  if (latestData==2710){
    tempo = 10
    ok = false;
  }

  if (latestData==2709){
    tempo = 9
    ok = false;
 }

  if (latestData==2708){
    tempo = 8
    ok = false;
  }

  if (latestData==2707){
    tempo = 7
    ok = false;
  }

  if (latestData==2706){
    tempo = 6
    ok = false;
 }

  if (latestData==2705){
    tempo = 5
    ok = false;
  }

  if (latestData==2704){
    tempo = 4
    ok = false;
  }

  if (latestData==2703){
    tempo = 3
    ok = false;
 }

  if (latestData==2702){
    tempo = 2
    ok = false;
  }

  if (latestData==2701){
    tempo = 1
    ok = false;

 }

//------------------------------------------------------------------------------------------FASTER
//------------------------------------------------------------------------------------------FASTER
//------------------------------------------------------------------------------------------FASTER
//------------------------------------------------------------------------------------------FASTER
//------------------------------------------------------------------------------------------FASTER
//------------------------------------------------------------------------------------------FASTER
 

if (latestData >= 2000 && latestData < 3000 || latestData >= 4000){

    textSize(20);
    fill(0);
    textStyle(NORMAL);
    noStroke();
    textAlign(CENTER, CENTER);
    text("faster ↘", -372, -177);
  }

    if(timer == true){
    textSize(40);
    fill(0);
    noStroke();
    textAlign(CENTER, CENTER);
    text(tempo, 0, 0);
    }

    if(timer == false){
      textSize(40);
      fill(0);
      noStroke();
      textAlign(CENTER, CENTER);
      text(newestData + " icks", 0, 0);
      }
  
      if (latestData>=4000){

        newestData = latestData - 4000;
    
        }


  


//------------------------------------------------------------------------------------------RING
//------------------------------------------------------------------------------------------RING
//------------------------------------------------------------------------------------------RING
//------------------------------------------------------------------------------------------RING
//------------------------------------------------------------------------------------------RING



    if (newestData <= 10){
    slider = createSlider(0, 10, 0.7, 0.1);
    slider1 = createSlider(0, 10, 0.4, 0.1);

    translate(random(-1),random(-1));
    }

    if (newestData > 10 && newestData < 30){
    slider = createSlider(0, 10, 1, 0.1);
    slider1 = createSlider(0, 10, 2, 0.1);
    translate(random(-2),random(-2));
    }
  
    if (newestData > 30 && newestData < 60){
      slider = createSlider(15, 10, 3, 0.1);
      slider1 = createSlider(16, 10, 4, 0.1);
      translate(random(-3),random(-3));
    }
  
    if (newestData > 60 && newestData < 100){
      slider = createSlider(25, 10, 5, 0.1);
      slider1 = createSlider(36, 10, 6, 0.1);
      translate(random(-4),random(-4));
    }
  
    if (newestData >= 100){
      slider = createSlider(50, 10, 10, 0.1);
      slider1 = createSlider(100, 10, 10, 0.1);
      translate(random(-5),random(-5));
    }
    
    slider.hide();
    slider1.hide();

  if (start == false){
    translate(width / 2.7, height / 2);
  }


  stroke(0);
  strokeWeight(2);
  noFill();
  beginShape();
  let noiseMax = slider.value();
  for (let a = 0; a < TWO_PI; a += radians(6)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }

  endShape(CLOSE);
  phase += 0.003;
  zoff += 0.03;

  stroke('#8ee002');
  strokeWeight(2);
  noFill();
  beginShape();
  let noiseMax1 = slider1.value();
  for (let a = 0; a < TWO_PI; a += radians(5)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax1);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax1);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 2);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }

  endShape(CLOSE);
}

}

function savedata(){
  arr.push(newestData);
  console.log(arr);
}

function mousePressed() {

  start = true;
  arr.push(0);

}

