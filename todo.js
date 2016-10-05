'use strict'

// The necessary library or module for running the program
const fs = require('fs');
const rl = require('readline');
const jsonfile = require('jsonfile');

//Outside file
const file = './data.json';

// the variable that is used entire program
// mutable statwe
let input = process.argv.splice(2);


switch (input[0]) {
  case "add":
    //write and update the data.json
    jsonfile.writeFileSync(file, input);
    break;
  case "list":
    let json = jsonfile.readFileSync(file);
    console.log(json);
    // see the data of data.json and present it with desired format
    break;
  case "delete":
    // delete the list based on id in the data.json
    break;
  case "complete":
    //see only the tasks which has competed task
    break;
  case "uncomplete":
    // see only the uncomplete tasks
    break;
  default:
    // print the help;
    console.log("####   TO DO LIST HELP   ####");
    console.log("------------------------------------");
    console.log("$ node todo.js");
    console.log("$ node todo.js list");
    console.log("$ node todo.js add <task_content>");
    console.log("$ node todo.js task <task_id>");
    console.log("$ node todo.js delete <task_id>");
    console.log("$ node todo.js complete <task_id>");
    console.log("$ node todo.js uncomplete <task_id>");
}



// Auxilary Function

// function that translate array to object
function arrayToObject(arr) {
  var temp = {};
  for (var i = 0; i < arr.length; i += 1)
    temp[i] = {
      id: i,
      task: arr[i]
    }
  return temp;
}

function display(json){
  for(var i = 0; i < json.length; i+=1 ){
    console.log(json[i]+'.','json[itask')
  }
}
