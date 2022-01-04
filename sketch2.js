let serial; // variable for the serial object
let latestData = 0; // variable to hold the data
let ok = 1;

var ctx = document.getElementById("myChart");
const labels  = [
  '0 sec',
  '',
  '',
  '',
  '',
  '5 sec',
  '',
  '',
  '',
  '',
  '10 sec',
  
];

const data = {
  labels: labels,
  datasets: [{
    data: [latestData],
    backgroundColor: [
      '#8ee002',
    ],
  }]
};

const config = {
  type: 'bar',
  data: data,
};


function setup() {
  noCanvas();
  background(250);
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

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
    
  );

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



}