
let serial; // variable for the serial object
let latestData = 0; // variable to hold the data
let totalicks = 0;
let h1 = 300;
let h2 = 240;
let h3 =  140;
let h4 = 340;
let h5 =  440;
let h6 =  440;
let h7 =  440;
let h8 =  440;
let h9 =  440;
let h10 = 440;
let h11 = 440;
let h12 = 440;
let h13 =  440;
let h14 = 440;
let h15 =  440;
let h16 =  440;
let h17 =  440;
let h18 =  440;
let h19 =  440;
let h20 = 440;


function setup() {
  cnv = createCanvas(1200, 1450);
  background(255);
  // serial constructor
  serial = new p5.SerialPort();
  // get a list of all connected serial devices
  serial.list();
  // serial port to use - you'll need to change this
  serial.open('COM8');
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



  stroke(200)
  line(65, 40, 1045, 40);
  line(65, 80, 1045, 80);
  line(65, 120, 1045, 120);
  line(65, 160, 1045, 160);
  line(65, 200, 1045, 200);
  line(65, 240, 1045, 240);
  line(65, 280, 1045, 280);
  line(65, 320, 1045, 320);
  line(65, 360, 1045, 360);
  line(65, 400, 1045, 400);


  textFont("Open Sans");
  text("100 icks", 0, 40);
  text("75 icks", 0, 145);
  text("50 icks", 3, 240);
  text("25 icks", 3, 345);

  textSize(15);
  text("icks per second", 1070, 40);

  text("total icks", 1070, 120);

  text("strongest hit", 1070, 200);


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
  latestData = "Serial Port is Closed";
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

function select(){

  if(latestData >= 10000 && latestData <= 20000){

    h1 = latestData - 10000;

  }

  if(latestData >= 20000 && latestData <= 30000){

    h2 = latestData - 20000;

  }

  if(latestData >= 30000 && latestData <= 40000){

    h3 = latestData - 30000;

  }

  if(latestData >= 40000 && latestData <= 50000){

    h4 = latestData - 40000;

  }

  if(latestData >= 50000 && latestData <= 60000){

    h5 = latestData - 50000;

  }

  if(latestData >= 60000 && latestData <= 70000){

    h6 = latestData - 60000;

  }

  if(latestData >= 70000 && latestData <= 80000){

    h7 = latestData - 70000;

  }

  if(latestData >= 80000 && latestData <= 90000){

    h8 = latestData - 80000;

  }

  if(latestData >= 90000 && latestData <= 100000){

    h9 = latestData - 90000;

  }

  if(latestData >= 100000 && latestData <= 110000){

    h10 = latestData - 100000;

  }

  if(latestData >= 110000 && latestData <= 120000){

    h11 = latestData - 110000;

  }

  if(latestData >= 120000 && latestData <= 130000){

    h12 = latestData - 120000;

  }

  if(latestData >= 130000 && latestData <= 140000){

    h13 = latestData - 130000;

  }

  if(latestData >= 140000 && latestData <= 150000){

    h14 = latestData - 140000;

  }

  if(latestData >= 150000 && latestData <= 160000){

    h15 = latestData - 150000;

  }

  if(latestData >= 160000 && latestData <= 170000){

    h16 = latestData - 160000;

  }

  if(latestData >= 170000 && latestData <= 180000){

    h17 = latestData - 170000;

  }

  if(latestData >= 180000 && latestData <= 190000){

    h13 = latestData - 180000;

  }

  if(latestData >= 190000 && latestData <= 200000){

    h19 = latestData - 190000;

  }

  if(latestData >= 200000 && latestData <= 210000){

    h20 = latestData - 200000;

  }


}

function draw() {

  textSize(40);
  text(70 / 10, 1070, 80);
  text(788, 1070, 160);
  text(90, 1070, 240);

  rectMode(CORNERS)
  fill("#8ee002");
  rect(80, h1, 122.5, 440);
  rect(127.5, h2, 170, 440);
  rect(175, h3, 217.5, 440);
  rect(222.5, h4, 265, 440);
  rect(270, h5, 312.5, 440);
  rect(317.5, h6, 360, 440);
  rect(365, h7, 407.5, 440);
  rect(412.5, h8, 455, 440);
  rect(460, h9, 502.5, 440);
  rect(507.5, h10, 550, 440);
  rect(555, h11, 597.5, 440);
  rect(602.5, h12, 645, 440);
  rect(650, h13, 692.5, 440);
  rect(697.5, h14, 740, 440);
  rect(745, h15, 787.5, 440);
  rect(792.5, h16, 835, 440);
  rect(840, h17, 882.5, 440);
  rect(887.5, h18, 930, 440);
  rect(935, h19, 977.5, 440);
  rect(982.5, h20, 1025, 440);

  
  
  line(65, 440, 1045, 440);

  
  ellipse(width/2, height/2, latestData)



}