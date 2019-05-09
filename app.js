// Rover Object Goes Here
var rover = {
  direction: ["N", "W", "S", "E"],
  x: 0,
  y: 0, 
  travelLog: [[0, 0]]
}

var north = rover.direction[0];
var west = rover.direction[1];
var south = rover.direction[2];
var east = rover.direction[3];
var xRover = rover.x;
var yRover = rover.y;

var defaultDirection = north;

var defaultGrid = [
  ["R", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
  ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
  ["null", "OBS", "null", "null", "null", "null", "null", "null", "null", "null"],
  ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
  ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
  ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
  ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
  ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
  ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
  ["null", "null", "null", "null", "null", "null", "null", "null", "null", "null"],
];

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  currentDirection(rover);
}

function turnRight(rover){
  console.log("turnRight was called!");
  currentDirection(rover);
}

function facing(command) {
  switch (command) {
    case "l":
      if (defaultDirection === north) {
        turnLeft(west);
      } else if (defaultDirection === west) {
        turnLeft(south);
      } else if (defaultDirection === south) {
        turnLeft(east);
      } else {
        turnLeft(north);
      }
      break;
    case "r":
       if (defaultDirection === north) {
        turnRight(east);
      } else if (defaultDirection === east) {
        turnRight(south);
      } else if (defaultDirection === south) {
        turnRight(west);
      } else {
        turnRight(north);
      }
      break;
    default:
      currentDirection(north);
  }
}

function currentDirection(newRover){
  if (newRover !== north ) {
    defaultDirection = newRover;
  } else {
    defaultDirection = north;
  }
  console.log("Current direction is: " + defaultDirection);
}

function moveForward(){
  switch(defaultDirection){
    case west:
       if (xRover > 0 && defaultGrid[yRover][xRover-1] !== "OBS"){
        defaultGrid[yRover][xRover]= "null";
        xRover--;
        defaultGrid[yRover][xRover]= "R";
      } else if (defaultGrid[yRover][xRover-1] === "OBS") {
        console.log("There is an obstacle.");
      } else {
        console.log("You cannot move.");
      }
        break;
    case east:
      if (xRover < 9 && defaultGrid[yRover][xRover+1] !== "OBS"){ 
        defaultGrid[yRover][xRover]= "null";
        xRover++;
        defaultGrid[yRover][xRover]= "R";
      } else if (defaultGrid[yRover][xRover+1] === "OBS") {
        console.log("There is an obstacle.");
      } else {
        console.log("You cannot move.");
      }
        break;
    case north:
      if (yRover > 0 && defaultGrid[yRover-1][xRover] !== "OBS"){
        defaultGrid[yRover][xRover]= "null";
        yRover--;
        defaultGrid[yRover][xRover]= "R";
      } else if (defaultGrid[yRover-1][xRover] === "OBS") {
        console.log("There is an obstacle.");
      } else {
        console.log("You cannot move.");
      }
      break;
    case south:
      if (yRover < 9 && defaultGrid[yRover+1][xRover] !== "OBS"){
        defaultGrid[yRover][xRover]= "null";
        yRover++;
        defaultGrid[yRover][xRover]= "R";
      } else if (defaultGrid[yRover+1][xRover] === "OBS") {
        console.log("There is an obstacle.");
      } else {
        console.log("You cannot move.");
      }
    break;
      
}
  var x = xRover;
  var y = yRover;
  
  var z = pastPlaces(y, x);
  
  console.log("----------------------"); 
  console.log("x row: " + x);
  console.log("y row: " + y);
  console.log("History: " + z);
  console.log("*********** MATRIX ********"); 
  console.log(defaultGrid.join('\n'));
}

function moveBackwards(){
  switch(defaultDirection){
    case west:
      if (xRover < 9 && defaultGrid[yRover][xRover+1] !== "OBS") {
        defaultGrid[yRover][xRover]= "null";
        xRover++;
        defaultGrid[yRover][xRover]= "R";
      } else if (defaultGrid[yRover][xRover+1] === "OBS") {
        console.log("There is an obstacle.");
      } else {
        console.log("You cannot move.");
      }
        break;
    case east:
      if (xRover > 0 && defaultGrid[yRover][xRover-1] !== "OBS"){ 
        defaultGrid[yRover][xRover]= "null";
        xRover--;
        defaultGrid[yRover][xRover]= "R";
      } else if (defaultGrid[yRover][xRover-1] === "OBS") {
        console.log("There is an obstacle.");
      } else {
        console.log("You cannot move.");
      }
        break;
    case north:
      if (yRover < 9 && defaultGrid[yRover+1][xRover] !== "OBS") {
        defaultGrid[yRover][xRover]= "null";
        yRover++;
        defaultGrid[yRover][xRover]= "R";
      } else if (defaultGrid[yRover+1][xRover] === "OBS") {
        console.log("There is an obstacle.");
      } else {
        console.log("You cannot move.");
      }
      break;
    case south:
      if (yRover > 0 && defaultGrid[yRover-1][xRover] !== "OBS") {
        defaultGrid[yRover][xRover]= "null";
        yRover--;
        defaultGrid[yRover][xRover]= "R";
      } else if (defaultGrid[yRover-1][xRover] === "OBS") {
        console.log("There is an obstacle.");
      } else {
        console.log("You cannot move.");
      }
    break;
      
  }
  
  var x = xRover;
  var y = yRover;
  
  var z = pastPlaces(y, x);
  
  console.log("----------------------"); 
  console.log("x row: " + x);
  console.log("y row: " + y);
  console.log("History: " + z);
  console.log("*********** MATRIX ********"); 
  
  console.log(defaultGrid.join('\n'));
}

function receiveCommands(commands) {
   for (var i = 0; i < commands.length; i++){
     if (commands[i] === "f"){
       moveForward();
     } else if (commands[i] === "b"){
       moveBackwards();
       } else if (commands[i] === "r"){
       facing("r");
     } else if (commands[i] === "l"){
       facing("l");
     } else {
       console.log("'" + commands[i] + "' is not a possible command.");
     }
   }
 }

function pastPlaces(y, x){
  var u = rover.travelLog.length;
  rover.travelLog[u++] = [y, x];
  return rover.travelLog;
 }

 receiveCommands("");