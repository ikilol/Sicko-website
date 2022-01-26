let serial; // variable for the serial object
let latestData = 0; // variable to hold the data
let ok = 1;
let arr = [90, 88, 40, 83, 99];
//let bigick = arr[0];
let bigick = 231;

let phase = 0;
let zoff = 0;
let slider;
let slider1;
//let tempo = 0-700;
let totalicks = 2340;
let newestData = 0;


function setup() {
  createCanvas(windowWidth, 400);
  background(250);
  // serial constructor
  serial = new p5.SerialPort();
  // get a list of all connected serial devices
  serial.list();
  // serial port to use - you'll need to change this
  serial.open('COM6');
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
}

function draw() {
  background(255);

 // for (var i = 0; i < arr.length; i++){
 //   if (arr[i] >= bigick) {
 //     bigick = arr[i];
 //   }
 // }
//
 // console.log(bigick);

  if (latestData >= 1000 && latestData <2000){
  textSize(20);
  fill(0);
  noStroke();
  textStyle(NORMAL);
  textAlign(LEFT, CENTER);
  text("Total number\nof icks collected", 650, 100);

  textSize(40);
  textStyle(BOLD);
  text(totalicks, 650, 150);

  textSize(20);
  textStyle(NORMAL);
  fill(0);
  noStroke();
  textAlign(LEFT);
  text("highest amount\nof icks per session", 650, 250);

  textSize(40);
  textStyle(BOLD);
  text(bigick, 650, 300);

  newestData = latestData - 1000;

  }

  if (latestData >= 2000){
    textSize(20);
    fill(0);
    noStroke();
    textStyle(NORMAL);
    textAlign(LEFT, CENTER);
    text("Total number\nof icks collected", 650, 100);
  
    textSize(40);
    textStyle(BOLD);
    text(totalicks, 650, 150);
  
    textSize(20);
    textStyle(NORMAL);
    fill(0);
    noStroke();
    textAlign(LEFT);
    text("Time left", 650, 250);
  
    textSize(40);
    textStyle(BOLD);
    text(tempo, 650, 300);
  
    newestData = latestData - 2000;
  
    }
  



  if (newestData <= 10){
    slider = createSlider(0, 10, 0.7, 0.1);
    slider1 = createSlider(0, 10, 0.4, 0.1);

    translate(random(-1),random(-1));
    }

  if (newestData > 10 && newestData < 20){
    slider = createSlider(0, 10, 1, 0.1);
    slider1 = createSlider(0, 10, 2, 0.1);
    translate(random(-2),random(-2));
    }
  
    if (newestData > 20 && newestData < 80){
      slider = createSlider(15, 10, 3, 0.1);
      slider1 = createSlider(16, 10, 4, 0.1);
      translate(random(-3),random(-3));
    }
  
    if (newestData > 80 && newestData < 200){
      slider = createSlider(25, 10, 5, 0.1);
      slider1 = createSlider(36, 10, 6, 0.1);
      translate(random(-4),random(-4));
    }
  
    if (newestData >= 200){
      slider = createSlider(50, 10, 10, 0.1);
      slider1 = createSlider(100, 10, 10, 0.1);
      translate(random(-5),random(-5));
    }
    
    slider.hide();
    slider1.hide();

  translate(width / 2.7, height / 2);
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

  translate(random(0),random(-0));
  textSize(40);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER);
  text(newestData + " icks", 0, 0);



 // if (latestData=800){
 //   sessione = 0
 // }
//
 // if (latestData=710){
 //   tempo = 10
 // }
//
 // if (latestData=709){
 //   tempo = 9
 // }
//
 // if (latestData=708){
 //   tempo = 8
 // }


}